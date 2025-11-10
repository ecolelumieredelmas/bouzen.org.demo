// =========================================================================
// --- CONFIGURACIONES GLOBALES ---
// =========================================================================
const VALID_CODE = '001';
let lastScroll = 0;
let currentChat = null;
let emojiPickerVisible = false;

// =========================================================================
// --- DATOS DEL CHAT ---
// =========================================================================
const contacts = {
    alejandro: { name: "Alejandro", initial: "A", isOnline: true, color: 'from-blue-500 to-blue-600' },
    carlos: { name: "Carlos", initial: "C", isOnline: true, color: 'from-green-500 to-green-600' },
    miguel: { name: "Miguel", initial: "M", isOnline: false, color: 'from-purple-500 to-purple-600' },
    david: { name: "David", initial: "D", isOnline: false, color: 'from-yellow-500 to-yellow-600' },
    roberto: { name: "Roberto", initial: "R", isOnline: false, color: 'from-pink-500 to-pink-600' }
};

const chats = {
    alejandro: {
        messages: [
            { text: "¡Hola Claire! Te vi ayer en el hotel Venus y quedé impactado 😍 Eres aún más hermosa en persona que en tus fotos", time: "12:30 PM", isClaire: false },
            { text: "¡Hola Alejandro! Qué dulce mensaje 💕 Me encanta saber que causé esa impresión. ¿Te gustaría que coordinemos un encuentro?", time: "12:31 PM", isClaire: true },
            { text: "Esperamos que esta demostración te convenza de adquirir tu propia web personalizada. ¡Contáctanos para más información! 🚀", time: "12:32 PM", isClaire: false }
        ]
    },
    carlos: {
        messages: [
            { text: "Claire, no puedo esperar para nuestro encuentro 💋 Tu último directo me dejó sin palabras", time: "11:45 AM", isClaire: false },
            { text: "Hola Carlos 🥰 Me emociona mucho tu entusiasmo. Te prometo que será una experiencia inolvidable", time: "11:46 AM", isClaire: true },
            { text: "¿Te gustó esta demostración? Nuestro equipo puede crear una web similar para ti. ¡Escríbenos! 💻", time: "11:47 AM", isClaire: false }
        ]
    },
    miguel: {
        messages: [
            { text: "Wow Claire, eres increíble 🔥 Te vi en el bar anoche y no pude acercarme, pero tu presencia llenaba el lugar", time: "10:20 AM", isClaire: false },
            { text: "Hola Miguel ✨ Qué lindo saber que mi energía se siente así. La próxima vez acércate, me encanta conocer nuevos amigos", time: "10:21 AM", isClaire: true },
            { text: "Esta es una demostración de nuestro trabajo. ¿Interesado en tu propia plataforma web profesional? 📱", time: "10:22 AM", isClaire: false }
        ]
    },
    david: {
        messages: [
            { text: "Tu directo de ayer me volvió loco 🥵 Eres pura sensualidad Claire, necesito verte ya", time: "Ayer", isClaire: false },
            { text: "Hola David 😘 Me encanta cuando mis directos tienen ese efecto. Cuéntame, ¿qué fue lo que más te gustó?", time: "Ayer", isClaire: true },
            { text: "Esperamos que esta demo te haya gustado. Nuestro equipo está listo para crear tu sitio web único. ¡Contáctanos! ✨", time: "Ayer", isClaire: false }
        ]
    },
    roberto: {
        messages: [
            { text: "No dejo de pensar en nuestro último encuentro 💕 Fue mágico Claire, eres increíble", time: "Ayer", isClaire: false },
            { text: "Roberto querido 🥰 Me alegra mucho saber que lo disfrutaste tanto como yo. Eres un hombre especial", time: "Ayer", isClaire: true },
            { text: "¿Listo para tener tu propia web como esta? Nuestro equipo te espera para hacer realidad tu proyecto digital. 💫", time: "Ayer", isClaire: false }
        ]
    }
};

const responses = [
    "Esperamos que esta demostración te convenza de adquirir tu propia web personalizada 🚀",
    "¿Te gustó esta demo? Nuestro equipo puede crear una plataforma similar para ti 💻",
    "Esta es una muestra de nuestro trabajo. ¿Interesado en tu propio sitio web? 📱",
    "Esperamos que esta demostración te haya gustado. ¡Contáctanos para tu proyecto! ✨",
    "¿Listo para tener tu propia web como esta? Nuestro equipo te espera 💫",
    "Esta demo muestra lo que podemos hacer por ti. ¿Te animas a tu propio proyecto? 🌟",
    "¿Imaginas tener tu plataforma web personalizada? Nosotros la hacemos realidad 💎",
    "Esperamos que esta demostración inspire tu próximo proyecto web digital 🎯",
    "¿Te gustaría una web similar para tu negocio? Nuestro equipo está listo 🚀",
    "Esta es solo una muestra. Imagina lo que podemos crear para ti exclusivamente 💫"
];

// =========================================================================
// --- ELEMENTOS DEL DOM ---
// =========================================================================
const header = document.getElementById('header') || document.getElementById('main-header');
const mobileMenu = document.getElementById('mobile-menu');
const toggleOpen = document.getElementById('toggle-open');
const toggleClose = document.getElementById('toggle-close');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const accessCodeInput = document.getElementById('accessCode');

// =========================================================================
// --- SISTEMA DE ACCESO ---
// =========================================================================
function validateAccessCode() {
    const message = document.getElementById('codeMessage');
    const code = accessCodeInput ? accessCodeInput.value.trim() : '';
    
    if (!code) {
        showMessage('Por favor ingresa un código', 'error');
        shakeInput();
        return;
    }
    
    if (code === VALID_CODE) {
        showMessage('✓ Código válido - Accediendo al live...', 'success');
        
        setTimeout(() => {
            window.location.href = 'live.html';
        }, 1000);
    } else {
        showMessage('✗ Código incorrecto - Intenta de nuevo', 'error');
        shakeInput();
        
        setTimeout(() => {
            if (message) message.classList.add('hidden');
        }, 3000);
    }
    
    if (accessCodeInput) accessCodeInput.value = '';
}

function showMessage(text, type) {
    const message = document.getElementById('codeMessage');
    if (!message) return;
    
    message.textContent = text;
    
    if (type === 'success') {
        message.className = 'text-xs text-green-500 mt-2 text-center font-medium';
    } else if (type === 'error') {
        message.className = 'text-xs text-red-500 mt-2 text-center font-medium';
    }
    
    message.classList.remove('hidden');
}

function shakeInput() {
    if (!accessCodeInput) return;
    accessCodeInput.classList.add('shake');
    setTimeout(() => {
        accessCodeInput.classList.remove('shake');
    }, 400);
}

// =========================================================================
// --- SISTEMA DE CHAT ---
// =========================================================================
function getRandomResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
}

function openChat(chatId) {
    currentChat = chatId;
    const contact = contacts[chatId];
    const chat = chats[chatId];
    
    document.getElementById('chatName').textContent = contact.name;
    document.getElementById('chatStatus').textContent = contact.isOnline ? 'En línea' : 'Últ. vez hoy';
    
    document.getElementById('contactInitial').textContent = contact.initial;
    document.getElementById('contactInitial').className = `w-10 h-10 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`;
    document.getElementById('contactOnlineIndicator').classList.toggle('hidden', !contact.isOnline);

    renderTypingIndicator(chatId);
    loadMessages(chat.messages);
    
    document.getElementById('contactsScreen').classList.add('screen-hidden');
    document.getElementById('chatScreen').classList.add('screen-active');
}

function closeChat() {
    document.getElementById('contactsScreen').classList.remove('screen-hidden');
    document.getElementById('chatScreen').classList.remove('screen-active');
    currentChat = null;
    hideEmojiPicker();
}

function loadMessages(messages) {
    const container = document.getElementById('messagesContainer');
    container.innerHTML = '';
    
    messages.forEach(msg => {
        addMessageToChat(msg.text, msg.time, msg.isClaire);
    });
    
    container.scrollTop = container.scrollHeight;
}

function renderTypingIndicator(chatId) {
     if (!chatId) return;
     const contact = contacts[chatId];
     const typingAvatar = document.getElementById('typingAvatar');
     
     typingAvatar.textContent = contact.initial.toUpperCase();
     typingAvatar.className = `w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 bg-gradient-to-br ${contact.color}`;
}

function addMessageToChat(text, time, isClaire = false) {
    const container = document.getElementById('messagesContainer');
    const messageDiv = document.createElement('div');
    
    messageDiv.className = `flex items-end gap-2 ${isClaire ? 'justify-end' : 'justify-start'} message-enter`;
    
    const contactInitial = currentChat ? contacts[currentChat].initial.toUpperCase() : 'U';
    const contactColor = currentChat ? contacts[currentChat].color : 'from-blue-500 to-blue-600';
    const userAvatar = `<div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 bg-gradient-to-br ${contactColor}">${contactInitial}</div>`;
    const claireAvatar = `<img src="img1/exclusivo.jpg" class="w-8 h-8 rounded-full object-cover flex-shrink-0 border border-brandRed/50">`;

    const bubbleClass = isClaire 
        ? 'bg-brandRed text-white claire-bubble px-3 py-2 shadow-lg message-claire' 
        : 'bg-zinc-800 text-white user-bubble px-3 py-2 shadow-md message-user';
    
    const avatarLeft = !isClaire ? userAvatar : '';
    const avatarRight = isClaire ? claireAvatar : '';
    const checkMark = isClaire ? `<i class="fas fa-check text-xs text-blue-400 ml-1"></i>` : '';

    messageDiv.innerHTML = `
        ${avatarLeft}
        <div class="flex flex-col ${isClaire ? 'items-end' : 'items-start'} max-w-[80%]">
            <div class="relative ${bubbleClass}">
                <p class="text-sm break-words">${text}</p>
            </div>
            <span class="text-xs text-zinc-500 mt-1 px-1">${time} ${checkMark}</span>
        </div>
        ${avatarRight}
    `;

    container.appendChild(messageDiv);
    container.scrollTop = container.scrollHeight;
}

function toggleEmojiPicker() {
    const picker = document.getElementById('emojiPicker');
    emojiPickerVisible = !emojiPickerVisible;
    picker.style.display = emojiPickerVisible ? 'grid' : 'none';
}

function hideEmojiPicker() {
    const picker = document.getElementById('emojiPicker');
    picker.style.display = 'none';
    emojiPickerVisible = false;
}

function addEmoji(emoji) {
    const input = document.getElementById('messageInput');
    input.value += emoji;
    input.focus();
}

async function sendMessage() {
    if (!currentChat) return;

    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    if (!text) return;

    const time = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

    addMessageToChat(text, time, true);
    chats[currentChat].messages.push({ text: text, time: time, isClaire: true });

    input.value = '';
    hideEmojiPicker();

    const typing = document.getElementById('typingIndicator');
    typing.classList.remove('hidden');
    document.getElementById('messagesContainer').scrollTop = document.getElementById('messagesContainer').scrollHeight;

    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
    typing.classList.add('hidden');

    const responseText = getRandomResponse();
    const responseTime = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

    addMessageToChat(responseText, responseTime, false);
    chats[currentChat].messages.push({ text: responseText, time: responseTime, isClaire: false });
}

// =========================================================================
// --- NAVEGACIÓN POR TABS CON SCROLL ---
// =========================================================================
function initTabNavigation() {
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.addEventListener('click', function() {
            // Cambiar tab activo
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            this.classList.add('active');
            
            // Mostrar contenido del tab
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            const tabId = this.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
            }
            
            // Hacer scroll a la sección correspondiente si existe
            const sectionId = this.getAttribute('data-section');
            if (sectionId) {
                setTimeout(() => {
                    scrollToSection(sectionId);
                }, 100);
            }
        });
    });
}

function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        const header = document.getElementById('main-header') || document.getElementById('header');
        const headerHeight = header ? header.offsetHeight : 80;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Función global para cambiar tabs desde otros archivos
function switchTab(tabId) {
    const tabButton = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
    if (tabButton) {
        tabButton.click();
    }
}

// =========================================================================
// --- ZOOM DE IMÁGENES ---
// =========================================================================
function initImageZoom() {
    if (!modal || !modalImg) return;

    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// =========================================================================
// --- MENÚ MÓVIL ---
// =========================================================================
function initMobileMenu() {
    if (!mobileMenu || !toggleOpen || !toggleClose) return;

    const openMobileMenu = () => {
        mobileMenu.classList.remove('-translate-y-full', 'translate-x-full'); 
        mobileMenu.classList.add('translate-x-0');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileMenu.classList.remove('translate-y-0', 'translate-x-0');
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = '';
    };

    toggleOpen.addEventListener('click', openMobileMenu);
    toggleClose.addEventListener('click', closeMobileMenu);
    
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (e) => {
        const isMenuOpen = !mobileMenu.classList.contains('translate-x-full');
        if (isMenuOpen && !mobileMenu.contains(e.target) && !toggleOpen.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

// =========================================================================
// --- CONTROL DEL HEADER AL SCROLL ---
// =========================================================================
function initHeaderScroll() {
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.style.transform = "translateY(0)";
            return;
        }

        if (currentScroll > lastScroll) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        lastScroll = currentScroll;

        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// =========================================================================
// --- EFECTO PARALLAX ---
// =========================================================================
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || 0.5);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// =========================================================================
// --- ANIMACIONES DE REVELADO ---
// =========================================================================
function initRevealAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-section, .reveal-up, .reveal-left, .reveal-right, .gallery-item, .content-card').forEach(el => {
        observer.observe(el);
    });
}

// =========================================================================
// --- SCROLL SUAVE PARA ANCLAS ---
// =========================================================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =========================================================================
// --- NAVEGACIÓN POR HASH/ANCLAS ---
// =========================================================================
function initHashNavigation() {
    function handleHashNavigation() {
        const hash = window.location.hash;
        if (!hash) return;

        const targetElement = document.querySelector(hash);
        if (targetElement) {
            if (targetElement.classList.contains('tab-content')) {
                const tabButtons = document.querySelectorAll('.nav-tab');
                tabButtons.forEach(button => {
                    if (button.getAttribute('data-tab') === hash.replace('#', '')) {
                        button.click();
                    }
                });
            }
            
            setTimeout(() => {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    document.addEventListener('DOMContentLoaded', handleHashNavigation);
    window.addEventListener('hashchange', handleHashNavigation);
}

// =========================================================================
// --- MODALES Y DEMOSTRACIONES ---
// =========================================================================
function showCallDemo() {
    document.getElementById('callModal').classList.remove('hidden');
    document.getElementById('callModal').style.display = 'flex';
}

function closeCallModal() {
    document.getElementById('callModal').classList.add('hidden');
    document.getElementById('callModal').style.display = 'none';
}

function showPremiumMessage() {
    alert('🎭 DEMOSTRACIÓN: Esta es una plantilla de diseño. El proceso de pago/reserva real no está implementado.\n\nEn una implementación real, aquí se procesaría el pago y se activaría el servicio.');
}

function openCallBookingModal() {
    alert('📞 DEMOSTRACIÓN: Modal de reserva de llamada VIP - Funcionalidad no implementada');
}

function openMessageModal() {
    alert('💬 DEMOSTRACIÓN: Modal de mensajes privados - Funcionalidad no implementada');
}

// =========================================================================
// --- EVENT LISTENERS GLOBALES ---
// =========================================================================
function initEventListeners() {
    // Enter para enviar código de acceso
    if (accessCodeInput) {
        accessCodeInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                validateAccessCode();
            }
        });
    }

    // Event listeners del chat
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    
    if (sendButton && messageInput) {
        sendButton.addEventListener('click', sendMessage);
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // Event listeners del emoji picker
    document.addEventListener('click', (e) => {
        if (emojiPickerVisible && !e.target.closest('#emojiPicker') && !e.target.closest('.fa-smile')) {
            hideEmojiPicker();
        }
    });

    // Event listener del modal de llamadas
    const callModal = document.getElementById('callModal');
    if (callModal) {
        callModal.addEventListener('click', (e) => {
            if (e.target === callModal) {
                closeCallModal();
            }
        });
    }
}

// =========================================================================
// --- INICIALIZACIÓN ---
// =========================================================================
function init() {
    initTabNavigation();
    initImageZoom();
    initMobileMenu();
    initHeaderScroll();
    initParallax();
    initRevealAnimations();
    initSmoothScroll();
    initHashNavigation();
    initEventListeners();
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}


// =========================================================================
// --- MODAL DE RESERVA SIMPLE ---
// =========================================================================
function openBookingModal(serviceType) {
    // Crear el modal si no existe
    let modal = document.getElementById('bookingModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'bookingModal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm hidden';
        modal.innerHTML = `
            <div class="bg-zinc-900 border border-zinc-700 rounded-xl p-6 mx-4 max-w-md w-full transform transition-all duration-300 scale-95 opacity-0">
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto mb-4 bg-brandRed/20 rounded-full flex items-center justify-center">
                        <i class="fas fa-crown text-brandRed text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2">Reserva de Servicio</h3>
                    <p class="text-zinc-300 mb-6">
                        Esta es solo una demostración. En una implementación real, aquí se procesaría la reserva del ${serviceType}.
                    </p>
                    <button onclick="closeBookingModal()" class="bg-brandRed hover:bg-brandRed-dark text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                        Cerrar
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Mostrar el modal con animación
    modal.classList.remove('hidden');
    setTimeout(() => {
        const modalContent = modal.querySelector('div > div');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        const modalContent = modal.querySelector('div > div');
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function(e) {
    const modal = document.getElementById('bookingModal');
    if (modal && e.target === modal) {
        closeBookingModal();
    }
});

// Cerrar con Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeBookingModal();
    }
});

// =========================================================================
// --- EXPORTAR FUNCIONES GLOBALES ---
// =========================================================================
window.validateAccessCode = validateAccessCode;
window.showPremiumMessage = showPremiumMessage;
window.openCallBookingModal = openCallBookingModal;
window.openMessageModal = openMessageModal;
window.openChat = openChat;
window.closeChat = closeChat;
window.toggleEmojiPicker = toggleEmojiPicker;
window.addEmoji = addEmoji;
window.sendMessage = sendMessage;
window.showCallDemo = showCallDemo;
window.closeCallModal = closeCallModal;
window.switchTab = switchTab;
window.scrollToSection = scrollToSection;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;