function throttle(method: Function, delay: number, context: any): () => void {
    let inThrottle: boolean
    return function () {
        if (inThrottle) return

        method.apply(context, arguments)

        inThrottle = true
        setTimeout(() => (inThrottle = false), delay)
    }
}

function debounce(method: Function, delay: number, context: any): () => void {
    let timer: ReturnType<typeof setTimeout>
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            method.apply(context, arguments)
        }, delay)
    }
}

export class FullPage {
    private sections: Element[] = []
    private parent: HTMLElement | null = null

    constructor() {
    }

    init(parent: HTMLElement) {
        if (!parent) return console.error("ERROR: DOM parent is not defined")
        this.parent = parent
        this.initialiseSections()
        this.handleMouseWheelScroll()
        this.handleTouchScroll()
        window.addEventListener('resize', this.handleResize)
    }

    destroy() {
        window.removeEventListener('resize', this.handleResize)
        window.removeEventListener('DOMMouseScroll', this.handleMouseWheelScroll)
        window.removeEventListener('mousewheel', this.handleMouseWheelScroll)
        window.removeEventListener('touchstart', this.handleTouchScroll)
        window.removeEventListener('touchend', this.handleTouchScroll)
        window.removeEventListener('touchmove', this.handleTouchScroll)
        document.querySelector('.dots-container')?.remove()
    }

    reInit(parent: HTMLElement) {
        if (this.parent === parent) return this.initialiseSections()

        this.destroy()
        this.init(parent)
    }

    next() {
        this.scroll('DOWN')
    }

    prev() {
        this.scroll('UP')
    }

    initialiseSections() {
        if (!this.parent) return console.error("ERROR: DOM parent is not defined")

        this.parent.style.overflow = 'hidden'
        this.parent.style.height = '100vh'

        this.sections = Array.from(this.parent?.querySelectorAll('section.page') || [])

        if (this.sections.length === 0) return console.warn("DEBUG: No (section.page) found")

        this.sections[0].classList.add('active')

        const dotsParent = document.getElementById('__nuxt')
        let dotsContainer = document.querySelector('.dots-container')

        if (dotsContainer) {
            dotsContainer.classList.remove('dots-container')
            dotsContainer.innerHTML = ''
        } else {
            dotsContainer = document.createElement('div')
        }

        if (!dotsParent) return console.warn("DEBUG: No (el#root) found")

        dotsContainer.classList.add('dots-container')

        this.sections.forEach((_, index) => {
            const dot = document.createElement('div')
            dot.classList.add('dot')
            if (index === 0) dot.classList.add('active')

            dotsContainer!.appendChild(dot)

            dot.addEventListener('click', () => {
                const currentDot = document.querySelector('.dot.active')
                if (currentDot) currentDot.classList.remove('active')

                const currentSection = this.parent?.querySelector('.page.active')
                if (currentSection) currentSection.classList.remove('active')

                const nextSection = this.sections[index]
                nextSection.classList.add('active')

                dot.classList.add('active')
                nextSection.scrollIntoView({behavior: 'smooth'})
            })
        })

        dotsParent?.appendChild(dotsContainer)
    }

    scroll(direction: 'UP' | 'DOWN') {
        const currentSectionIndex = this.sections.findIndex((section) => section.classList.contains('active'))
        const nextSectionIndex = direction === 'UP' ? currentSectionIndex - 1 : currentSectionIndex + 1

        if (nextSectionIndex < 0 || nextSectionIndex > this.sections.length - 1) return

        const currentSection = this.sections[currentSectionIndex]
        const nextSection = this.sections[nextSectionIndex]

        currentSection.classList.remove('active')
        nextSection.classList.add('active')

        const dotParent = document.getElementById('__nuxt');
        const currentDot = dotParent?.querySelector('.dot.active')
        if (currentDot) currentDot.classList.remove('active')

        const nextDot = dotParent?.querySelector(`.dot:nth-child(${nextSectionIndex + 1})`)
        if (nextDot) nextDot.classList.add('active')

        nextSection.scrollIntoView({behavior: 'smooth'})
    }


    mouseScroll(delta: number) {
        if (delta > 0) {
            this.scroll('UP')
        } else if (delta < 0) {
            this.scroll('DOWN')
        }
    }

    handleMouseWheelScroll() {
        const delta = (event: any) => {
            if (event.wheelDelta) return event.wheelDelta
            if (event.detail) return -event.detail
            alert('Your browser doesn\'t support mouse wheel event')
        }

        const handleScroll = throttle((event: any) => this.mouseScroll(delta(event)), 500, this)
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            this.parent?.addEventListener('DOMMouseScroll', handleScroll)
        } else {
            this.parent?.addEventListener('mousewheel', handleScroll)
        }
    }

    handleTouchScroll() {
        let touchStartY = 0
        this.parent?.addEventListener('touchstart', (event) => {
            touchStartY = event.touches[0].clientY
        })
        this.parent?.addEventListener('touchend', (event) => {
            const touchEndY = event.changedTouches[0].clientY
            const delta = touchEndY - touchStartY

            this.mouseScroll(delta)
        })
        this.parent?.addEventListener('touchmove', (event) => {
            event.preventDefault()
        })
    }

    private handleResize = throttle(() => {
        const currentSection = this.parent?.querySelector('.page.active')
        if (currentSection) currentSection.scrollIntoView({behavior: 'smooth'})
    }, 500, this)
}

export function unClick(targetElement: Element | null, closeFunction: Function) {
    if (!targetElement) throw new Error('\'DEBUG: targetElement is null or undefined for UnClick function\'');

    const escHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeFunction();
        }
    };

    const clickHandler = (event: Event) => {
        const isClickInside = targetElement.contains(event.target as Node);
        if (!isClickInside) {
            closeFunction();
        }
    };

    document.addEventListener('keydown', escHandler);
    document.addEventListener('click', clickHandler);

    const remove = () => {
        document.removeEventListener('keydown', escHandler);
        document.removeEventListener('click', clickHandler);
    }

    return {
        remove: remove
    };
}