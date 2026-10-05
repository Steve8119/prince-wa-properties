import { useEffect, useMemo, useState } from 'react';
import './App.css';

// ============================================================
// IMAGE IMPORTS
// ============================================================

import logo from './assets/images/logo.png';
import house1 from './assets/images/house (1).jpg';
import house2 from './assets/images/house (2).jpg';
import house3 from './assets/images/house (3).jpg';
import house4 from './assets/images/house (4).jpg';
import house5 from './assets/images/house (5).jpg';
import house6 from './assets/images/house (6).jpg';
import house7 from './assets/images/house (7).jpg';
import house8 from './assets/images/house (8).jpg';
import house9 from './assets/images/house (9).jpg';
import house10 from './assets/images/house (10).jpg';
import house11 from './assets/images/house (11).jpg';
import house12 from './assets/images/house (12).jpg';
import house13 from './assets/images/house (13).jpg';
import house14 from './assets/images/house (14).jpg';
import house15 from './assets/images/house (15).jpg';

// ============================================================
// BUSINESS INFORMATION
// ============================================================

const BUSINESS_NAME = 'PRINCE WA PROPERTIES';

const PHONE = '0757344593';
const INTERNATIONAL_PHONE = '+254 757 344593';

const WHATSAPP_NUMBER = '254757344593';

const YOUTUBE_URL =
  'https://www.youtube.com/@PrinceWaProperties';

const INSTAGRAM_URL =
  'https://www.instagram.com/prince_wa_properties/';

const TIKTOK_URL =
  'https://www.tiktok.com/@princewaproperties';

// ============================================================
// PROPERTY DATA
// ============================================================

const properties = [
  {
    id: 1,
    image: house1,
    title: 'Modern Family Home',
    location: 'Nairobi, Kenya',
    area: 'Nairobi',
    price: 'KSh 8,500,000',
    numericPrice: 8500000,
    type: 'House',
    beds: 4,
    baths: 3,
    size: '2,500 sq ft',
    status: 'For Sale',
    featured: true,
    description:
      'A beautiful modern family home located in a convenient Nairobi neighborhood. The property offers spacious bedrooms, comfortable living areas and a secure environment.',
    amenities: [
      'Parking',
      'Security',
      'Garden',
      'Modern Kitchen',
      'Water Supply',
      'Electricity',
    ],
  },

  {
    id: 2,
    image: house2,
    title: 'Luxury Villa',
    location: 'Karen, Nairobi',
    area: 'Karen',
    price: 'KSh 25,000,000',
    numericPrice: 25000000,
    type: 'House',
    beds: 5,
    baths: 4,
    size: '4,800 sq ft',
    status: 'For Sale',
    featured: true,
    description:
      'An elegant luxury villa in Karen offering generous living spaces, premium finishes and a peaceful residential setting.',
    amenities: [
      'Swimming Pool',
      'Parking',
      'Garden',
      'Security',
      'DSQ',
      'Modern Kitchen',
    ],
  },

  {
    id: 3,
    image: house3,
    title: 'Spacious Bungalow',
    location: 'Westlands',
    area: 'Westlands',
    price: 'KSh 12,000,000',
    numericPrice: 12000000,
    type: 'House',
    beds: 3,
    baths: 2,
    size: '2,200 sq ft',
    status: 'For Sale',
    featured: true,
    description:
      'A spacious bungalow suitable for a growing family. Located close to shopping centers, schools, restaurants and major roads.',
    amenities: [
      'Parking',
      'Garden',
      'Security',
      'Water',
      'Electricity',
      'Servant Quarter',
    ],
  },

  {
    id: 4,
    image: house4,
    title: 'Prime Land - 1/4 Acre',
    location: 'Kiambu Road',
    area: 'Kiambu',
    price: 'KSh 4,500,000',
    numericPrice: 4500000,
    type: 'Land',
    beds: 0,
    baths: 0,
    size: '1/4 Acre',
    status: 'For Sale',
    featured: true,
    description:
      'Prime quarter-acre land suitable for residential development in a growing and highly accessible area.',
    amenities: [
      'Title Deed',
      'Road Access',
      'Electricity Nearby',
      'Water Nearby',
      'Developing Area',
    ],
  },

  {
    id: 5,
    image: house5,
    title: 'Modern Apartment',
    location: 'Kilimani',
    area: 'Kilimani',
    price: 'KSh 6,000,000',
    numericPrice: 6000000,
    type: 'House',
    beds: 2,
    baths: 2,
    size: '1,200 sq ft',
    status: 'For Sale',
    featured: false,
    description:
      'A modern apartment in Kilimani ideal for homeowners and investors looking for a central Nairobi location.',
    amenities: [
      'Lift',
      'Parking',
      'Security',
      'Balcony',
      'Gym',
      'Backup Generator',
    ],
  },

  {
    id: 6,
    image: house6,
    title: 'Townhouse for Rent',
    location: 'Lavington',
    area: 'Lavington',
    price: 'KSh 85,000/mo',
    numericPrice: 85000,
    type: 'Rental',
    beds: 3,
    baths: 3,
    size: '2,100 sq ft',
    status: 'For Rent',
    featured: true,
    description:
      'A comfortable townhouse in Lavington with generous living spaces and excellent access to schools, shopping and business districts.',
    amenities: [
      'Parking',
      'Security',
      'Garden',
      'Balcony',
      'Water',
      'Internet Ready',
    ],
  },

  {
    id: 7,
    image: house7,
    title: 'Beachfront Plot',
    location: 'Diani',
    area: 'Diani',
    price: 'KSh 15,000,000',
    numericPrice: 15000000,
    type: 'Land',
    beds: 0,
    baths: 0,
    size: '1/2 Acre',
    status: 'For Sale',
    featured: true,
    description:
      'A beautiful coastal development opportunity in Diani suitable for a holiday home, resort or investment project.',
    amenities: [
      'Beach Access',
      'Road Access',
      'Electricity',
      'Water',
      'Tourism Area',
    ],
  },

  {
    id: 8,
    image: house8,
    title: 'Executive Maisonette',
    location: 'Runda',
    area: 'Runda',
    price: 'KSh 18,000,000',
    numericPrice: 18000000,
    type: 'House',
    beds: 4,
    baths: 4,
    size: '3,500 sq ft',
    status: 'For Sale',
    featured: true,
    description:
      'An executive maisonette located in the prestigious Runda neighborhood, ideal for families seeking privacy and comfort.',
    amenities: [
      'Garden',
      'Parking',
      'Security',
      'DSQ',
      'Modern Kitchen',
      'Gated Community',
    ],
  },

  {
    id: 9,
    image: house9,
    title: 'Cozy Studio Rental',
    location: 'Kasarani',
    area: 'Kasarani',
    price: 'KSh 25,000/mo',
    numericPrice: 25000,
    type: 'Rental',
    beds: 1,
    baths: 1,
    size: '550 sq ft',
    status: 'For Rent',
    featured: false,
    description:
      'An affordable studio rental in Kasarani suitable for a single professional or student.',
    amenities: [
      'Security',
      'Water',
      'Parking',
      'Internet Ready',
      'Electricity',
    ],
  },

  {
    id: 10,
    image: house10,
    title: 'Commercial Plot',
    location: 'Thika Road',
    area: 'Thika Road',
    price: 'KSh 20,000,000',
    numericPrice: 20000000,
    type: 'Land',
    beds: 0,
    baths: 0,
    size: '1/2 Acre',
    status: 'For Sale',
    featured: true,
    description:
      'Strategically positioned commercial land along the Thika Road corridor with excellent development potential.',
    amenities: [
      'Main Road Access',
      'Electricity',
      'Water',
      'Commercial Zone',
      'High Traffic Area',
    ],
  },

  {
    id: 11,
    image: house11,
    title: 'Gated Community Home',
    location: 'Syokimau',
    area: 'Syokimau',
    price: 'KSh 9,800,000',
    numericPrice: 9800000,
    type: 'House',
    beds: 4,
    baths: 3,
    size: '2,400 sq ft',
    status: 'For Sale',
    featured: false,
    description:
      'A modern family home located within a secure gated community in Syokimau.',
    amenities: [
      'Gated Community',
      'Security',
      'Parking',
      'Garden',
      'Water',
      'Children Play Area',
    ],
  },

  {
    id: 12,
    image: house12,
    title: 'Furnished Rental',
    location: 'Parklands',
    area: 'Parklands',
    price: 'KSh 120,000/mo',
    numericPrice: 120000,
    type: 'Rental',
    beds: 3,
    baths: 2,
    size: '1,800 sq ft',
    status: 'For Rent',
    featured: true,
    description:
      'A furnished rental apartment in Parklands offering convenience and comfort for professionals and families.',
    amenities: [
      'Furnished',
      'Parking',
      'Security',
      'Lift',
      'Generator',
      'Internet',
    ],
  },

  {
    id: 13,
    image: house13,
    title: 'Half Acre Plot',
    location: 'Ngong',
    area: 'Ngong',
    price: 'KSh 7,500,000',
    numericPrice: 7500000,
    type: 'Land',
    beds: 0,
    baths: 0,
    size: '1/2 Acre',
    status: 'For Sale',
    featured: false,
    description:
      'A spacious half-acre parcel in Ngong suitable for residential development and long-term investment.',
    amenities: [
      'Title Deed',
      'Road Access',
      'Water',
      'Electricity',
      'Developing Area',
    ],
  },

  {
    id: 14,
    image: house14,
    title: 'Penthouse Suite',
    location: 'Upper Hill',
    area: 'Upper Hill',
    price: 'KSh 35,000,000',
    numericPrice: 35000000,
    type: 'House',
    beds: 4,
    baths: 4,
    size: '4,000 sq ft',
    status: 'For Sale',
    featured: true,
    description:
      'A premium penthouse suite in Upper Hill designed for luxury living with excellent views and modern finishes.',
    amenities: [
      'Panoramic Views',
      'Parking',
      'Lift',
      'Gym',
      'Security',
      'Rooftop',
    ],
  },

  {
    id: 15,
    image: house15,
    title: 'Family Rental Home',
    location: 'Athi River',
    area: 'Athi River',
    price: 'KSh 65,000/mo',
    numericPrice: 65000,
    type: 'Rental',
    beds: 4,
    baths: 3,
    size: '2,300 sq ft',
    status: 'For Rent',
    featured: false,
    description:
      'A spacious family rental home in Athi River with easy access to Nairobi and surrounding areas.',
    amenities: [
      'Parking',
      'Garden',
      'Security',
      'Water',
      'Family Friendly',
    ],
  },
];

// ============================================================
// TESTIMONIALS
// ============================================================

const testimonials = [
  {
    id: 1,
    name: 'James Mwangi',
    role: 'Home Buyer',
    text:
      'Prince Wa Properties made my house search much easier. The communication was excellent and I was guided throughout the process.',
    rating: 5,
  },

  {
    id: 2,
    name: 'Sarah Wanjiku',
    role: 'Property Investor',
    text:
      'I appreciate how the listings are presented. The team was professional and helped me understand the property before making a decision.',
    rating: 5,
  },

  {
    id: 3,
    name: 'Brian Otieno',
    role: 'Tenant',
    text:
      'Finding a rental can be stressful, but the process was simple and straightforward. I would definitely recommend Prince Wa Properties.',
    rating: 5,
  },

  {
    id: 4,
    name: 'Mary Njeri',
    role: 'Land Buyer',
    text:
      'The team was very helpful when I was looking for land. They explained the location, price and development potential clearly.',
    rating: 5,
  },
];

// ============================================================
// SERVICES
// ============================================================

const services = [
  {
    icon: '🏠',
    title: 'Property Sales',
    description:
      'We help buyers discover houses and properties that match their budget, lifestyle and investment goals.',
  },

  {
    icon: '🌍',
    title: 'Land Sales',
    description:
      'Discover residential, commercial and investment land opportunities in strategic locations.',
  },

  {
    icon: '🔑',
    title: 'Property Rentals',
    description:
      'Find comfortable rental homes, apartments and other rental opportunities across different neighborhoods.',
  },

  {
    icon: '📈',
    title: 'Property Investment',
    description:
      'Get guidance when evaluating property opportunities and choosing locations with strong potential.',
  },

  {
    icon: '📱',
    title: 'Property Marketing',
    description:
      'We use creative content and digital marketing to help property owners reach potential buyers and tenants.',
  },

  {
    icon: '🤝',
    title: 'Property Consultation',
    description:
      'Talk to us about your property goals and receive practical guidance based on your needs.',
  },
];

// ============================================================
// FAQ DATA
// ============================================================

const faqData = [
  {
    question: 'How can I view a property?',
    answer:
      'Select any property on the website and use the enquiry buttons to contact Prince Wa Properties. We can help arrange a viewing.',
  },

  {
    question: 'Do you sell land?',
    answer:
      'Yes. We feature different types of land including residential and commercial opportunities.',
  },

  {
    question: 'Do you have rental properties?',
    answer:
      'Yes. Our rental listings include apartments, houses, townhouses and furnished properties.',
  },

  {
    question: 'Can I list my property with Prince Wa Properties?',
    answer:
      'Yes. Use the List Your Property form on the website or contact us directly by phone or WhatsApp.',
  },

  {
    question: 'Where are you located?',
    answer:
      'Prince Wa Properties operates in Nairobi, Kenya and can assist with property opportunities in different parts of Kenya.',
  },

  {
    question: 'Can I contact you through WhatsApp?',
    answer:
      'Yes. WhatsApp is available for property enquiries, viewing requests and general questions.',
  },
];

// ============================================================
// SMALL REUSABLE COMPONENTS
// ============================================================

function StarRating({ rating = 5 }) {
  return (
    <div className="star-rating" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
}

// ============================================================
// PROPERTY CARD
// ============================================================

function PropertyCard({
  property,
  isFavorite,
  onFavorite,
  onView,
}) {
  const whatsappMessage = encodeURIComponent(
    `Hello Prince Wa Properties, I am interested in ${property.title} in ${property.location}. Is it still available?`
  );

  return (
    <article className="property-card">
      <div className="property-image-container">
        <img
          src={property.image}
          alt={property.title}
          className="property-image"
        />

        <span className="property-badge">
          {property.type}
        </span>

        {property.featured && (
          <span className="featured-badge">
            Featured
          </span>
        )}

        <button
          className={`favorite-button ${
            isFavorite ? 'favorite-active' : ''
          }`}
          onClick={() => onFavorite(property.id)}
          aria-label={
            isFavorite
              ? 'Remove from favorites'
              : 'Add to favorites'
          }
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>

      <div className="property-card-content">
        <div className="property-status">
          {property.status}
        </div>

        <h3>{property.title}</h3>

        <p className="property-location">
          📍 {property.location}
        </p>

        <p className="property-price">
          {property.price}
        </p>

        <div className="property-details">
          {property.beds > 0 && (
            <span>
              🛏 {property.beds} Beds
            </span>
          )}

          {property.baths > 0 && (
            <span>
              🛁 {property.baths} Baths
            </span>
          )}

          <span>
            📐 {property.size}
          </span>
        </div>

        <div className="property-actions">
          <button
            className="btn btn-primary"
            onClick={() => onView(property)}
          >
            View Details
          </button>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

// ============================================================
// PROPERTY MODAL
// ============================================================

function PropertyModal({
  property,
  onClose,
}) {
  if (!property) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Prince Wa Properties, I would like to enquire about ${property.title} in ${property.location}.`
  );

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="property-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-image-container">
          <img
            src={property.image}
            alt={property.title}
            className="modal-image"
          />
        </div>

        <div className="modal-content">
          <span className="property-badge">
            {property.type}
          </span>

          <h2>{property.title}</h2>

          <p className="modal-location">
            📍 {property.location}
          </p>

          <div className="modal-price">
            {property.price}
          </div>

          <div className="modal-details-grid">
            {property.beds > 0 && (
              <div>
                <strong>{property.beds}</strong>
                <span>Bedrooms</span>
              </div>
            )}

            {property.baths > 0 && (
              <div>
                <strong>{property.baths}</strong>
                <span>Bathrooms</span>
              </div>
            )}

            <div>
              <strong>{property.size}</strong>
              <span>Property Size</span>
            </div>
          </div>

          <p className="modal-description">
            {property.description}
          </p>

          <h3>Property Features</h3>

          <div className="amenities-grid">
            {property.amenities.map((amenity) => (
              <span key={amenity}>
                ✓ {amenity}
              </span>
            ))}
          </div>

          <div className="modal-actions">
            <a
              href={`tel:${PHONE}`}
              className="btn btn-primary"
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// APP
// ============================================================

function App() {
  // ==========================================================
  // NAVIGATION STATE
  // ==========================================================

  const [menuOpen, setMenuOpen] = useState(false);

  // ==========================================================
  // SEARCH STATE
  // ==========================================================

  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('All');

  const [locationFilter, setLocationFilter] =
    useState('All Locations');

  const [priceFilter, setPriceFilter] =
    useState('Any Price');

  const [sortBy, setSortBy] =
    useState('Featured');

  // ==========================================================
  // PROPERTY STATE
  // ==========================================================

  const [selectedProperty, setSelectedProperty] =
    useState(null);

  const [favorites, setFavorites] =
    useState([]);

  // ==========================================================
  // UI STATE
  // ==========================================================

  const [showListingForm, setShowListingForm] =
    useState(false);

  const [showContactForm, setShowContactForm] =
    useState(false);

  const [showTopButton, setShowTopButton] =
    useState(false);

  const [activeFaq, setActiveFaq] =
    useState(null);

  const [newsletterEmail, setNewsletterEmail] =
    useState('');

  const [newsletterMessage, setNewsletterMessage] =
    useState('');

  // ==========================================================
  // LIST PROPERTY FORM STATE
  // ==========================================================

  const [listingForm, setListingForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'House',
    location: '',
    price: '',
    description: '',
    image: null,
  });

  const [listingPreview, setListingPreview] =
    useState('');

  // ==========================================================
  // CONTACT FORM STATE
  // ==========================================================

  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    property: '',
    message: '',
  });

  // ==========================================================
  // LOCATIONS
  // ==========================================================

  const locations = useMemo(() => {
    const uniqueLocations = [
      ...new Set(
        properties.map((property) => property.area)
      ),
    ];

    return uniqueLocations.sort();
  }, []);

  // ==========================================================
  // FILTER PROPERTIES
  // ==========================================================

  const filteredProperties = useMemo(() => {
    let results = properties.filter((property) => {
      const normalizedSearch =
        search.trim().toLowerCase();

      const matchesSearch =
        property.title
          .toLowerCase()
          .includes(normalizedSearch) ||
        property.location
          .toLowerCase()
          .includes(normalizedSearch) ||
        property.type
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesType =
        filter === 'All' ||
        property.type === filter;

      const matchesLocation =
        locationFilter === 'All Locations' ||
        property.area === locationFilter;

      let matchesPrice = true;

      if (priceFilter === 'Under 5M') {
        matchesPrice =
          property.numericPrice < 5000000;
      }

      if (priceFilter === '5M - 10M') {
        matchesPrice =
          property.numericPrice >= 5000000 &&
          property.numericPrice <= 10000000;
      }

      if (priceFilter === '10M - 20M') {
        matchesPrice =
          property.numericPrice > 10000000 &&
          property.numericPrice <= 20000000;
      }

      if (priceFilter === 'Above 20M') {
        matchesPrice =
          property.numericPrice > 20000000;
      }

      return (
        matchesSearch &&
        matchesType &&
        matchesLocation &&
        matchesPrice
      );
    });

    if (sortBy === 'Price Low') {
      results = [...results].sort(
        (a, b) =>
          a.numericPrice - b.numericPrice
      );
    }

    if (sortBy === 'Price High') {
      results = [...results].sort(
        (a, b) =>
          b.numericPrice - a.numericPrice
      );
    }

    if (sortBy === 'Newest') {
      results = [...results].sort(
        (a, b) => b.id - a.id
      );
    }

    if (sortBy === 'Featured') {
      results = [...results].sort(
        (a, b) =>
          Number(b.featured) -
          Number(a.featured)
      );
    }

    return results;
  }, [
    search,
    filter,
    locationFilter,
    priceFilter,
    sortBy,
  ]);

  // ==========================================================
  // FEATURED PROPERTIES
  // ==========================================================

  const featuredProperties = useMemo(() => {
    return properties
      .filter((property) => property.featured)
      .slice(0, 6);
  }, []);

  // ==========================================================
  // FAVORITES
  // ==========================================================

  const toggleFavorite = (id) => {
    setFavorites((current) => {
      if (current.includes(id)) {
        return current.filter(
          (favoriteId) => favoriteId !== id
        );
      }

      return [...current, id];
    });
  };

  // ==========================================================
  // RESET FILTERS
  // ==========================================================

  const resetFilters = () => {
    setSearch('');
    setFilter('All');
    setLocationFilter('All Locations');
    setPriceFilter('Any Price');
    setSortBy('Featured');
  };

  // ==========================================================
  // SCROLL EFFECT
  // ==========================================================

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  // ==========================================================
  // BODY MODAL LOCK
  // ==========================================================

  useEffect(() => {
    const modalOpen =
      selectedProperty ||
      showListingForm ||
      showContactForm;

    document.body.style.overflow = modalOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [
    selectedProperty,
    showListingForm,
    showContactForm,
  ]);

  // ==========================================================
  // CLOSE MENU ON ESC
  // ==========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        setSelectedProperty(null);
        setShowListingForm(false);
        setShowContactForm(false);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, []);

  // ==========================================================
  // LISTING FORM HANDLERS
  // ==========================================================

  const handleListingChange = (event) => {
    const { name, value } = event.target;

    setListingForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleListingImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setListingForm((current) => ({
      ...current,
      image: file,
    }));

    const reader = new FileReader();

    reader.onloadend = () => {
      setListingPreview(
        reader.result
      );
    };

    reader.readAsDataURL(file);
  };

  const submitListing = (event) => {
    event.preventDefault();

    const message = `
Hello Prince Wa Properties,

I would like to list my property.

Name: ${listingForm.name}
Phone: ${listingForm.phone}
Email: ${listingForm.email}
Property Type: ${listingForm.propertyType}
Location: ${listingForm.location}
Price: ${listingForm.price}
Description: ${listingForm.description}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );

    setListingForm({
      name: '',
      phone: '',
      email: '',
      propertyType: 'House',
      location: '',
      price: '',
      description: '',
      image: null,
    });

    setListingPreview('');
    setShowListingForm(false);
  };

  // ==========================================================
  // CONTACT FORM HANDLERS
  // ==========================================================

  const handleContactChange = (event) => {
    const { name, value } = event.target;

    setContactForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitContact = (event) => {
    event.preventDefault();

    const message = `
Hello Prince Wa Properties,

I have a property enquiry.

Name: ${contactForm.name}
Phone: ${contactForm.phone}
Email: ${contactForm.email}
Property: ${contactForm.property}
Message: ${contactForm.message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message);

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );

    setContactForm({
      name: '',
      phone: '',
      email: '',
      property: '',
      message: '',
    });

    setShowContactForm(false);
  };

  // ==========================================================
  // NEWSLETTER
  // ==========================================================

  const handleNewsletter = (event) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterMessage(
        'Please enter your email address.'
      );
      return;
    }

    setNewsletterMessage(
      'Thank you! You have been added to our property updates list.'
    );

    setNewsletterEmail('');
  };

  // ==========================================================
  // SCROLL TO SECTION
  // ==========================================================

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const element =
      document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // ==========================================================
  // SCROLL TO TOP
  // ==========================================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // ==========================================================
  // MAIN RENDER
  // ==========================================================

  return (
    <div className="app">

      {/* ======================================================
          TOP BAR
      ====================================================== */}

      <div className="top-bar">
        <div className="container top-bar-inner">

          <div className="top-bar-left">
            <span>
              📍 Nairobi, Kenya
            </span>

            <span>
              🕐 Available 24/7
            </span>
          </div>

          <div className="top-bar-right">
            <a href={`tel:${PHONE}`}>
              📞 {INTERNATIONAL_PHONE}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* ======================================================
          HEADER
      ====================================================== */}

      <header className="header">

        <div className="container header-inner">

          <button
            className="brand"
            onClick={() => scrollToSection('home')}
          >

            <div className="logo-container">
              <img
                src={logo}
                alt="Prince Wa Properties"
                className="logo-img"
              />
            </div>

            <div className="brand-copy">
              <strong>
                PRINCE WA
              </strong>

              <span>
                PROPERTIES
              </span>
            </div>

          </button>

          <nav
            className={`nav ${
              menuOpen ? 'nav-open' : ''
            }`}
          >

            <button
              onClick={() =>
                scrollToSection('home')
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection('listings')
              }
            >
              Properties
            </button>

            <button
              onClick={() =>
                scrollToSection('services')
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                scrollToSection('about')
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollToSection('contact')
              }
            >
              Contact
            </button>

            <button
              className="nav-list-property"
              onClick={() =>
                setShowListingForm(true)
              }
            >
              List Property
            </button>

          </nav>

          <div className="header-actions">

            <a
              href={`tel:${PHONE}`}
              className="header-call"
            >
              📞
              <span>Call</span>
            </a>

            <button
              className="menu-button"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              aria-label="Open menu"
            >
              {menuOpen ? '×' : '☰'}
            </button>

          </div>

        </div>

      </header>

      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-overlay" />

        <div className="container hero-content">

          <div className="hero-badge">
            🏆 Trusted Real Estate Partner
          </div>

          <h1>
            Find Your
            <span> Dream Property</span>
            in Kenya
          </h1>

          <p>
            Houses, lands and rentals carefully
            selected to help you find the right
            place for your next chapter.
          </p>

          <div className="hero-buttons">

            <button
              className="btn btn-primary btn-large"
              onClick={() =>
                scrollToSection('listings')
              }
            >
              Explore Properties
            </button>

            <button
              className="btn btn-light btn-large"
              onClick={() =>
                setShowContactForm(true)
              }
            >
              Contact Us
            </button>

          </div>

          <div className="hero-trust">

            <div>
              <strong>15+</strong>
              <span>Properties</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Professional</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          QUICK SEARCH
      ====================================================== */}

      <section className="quick-search-section">

        <div className="container">

          <div className="quick-search">

            <div className="search-box">

              <span>
                🔎
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search houses, land, rentals or locations..."
              />

            </div>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(event.target.value)
              }
            >
              <option value="All">
                All Property Types
              </option>

              <option value="House">
                Houses
              </option>

              <option value="Land">
                Land
              </option>

              <option value="Rental">
                Rentals
              </option>
            </select>

            <select
              value={locationFilter}
              onChange={(event) =>
                setLocationFilter(
                  event.target.value
                )
              }
            >
              <option>
                All Locations
              </option>

              {locations.map((location) => (
                <option
                  key={location}
                  value={location}
                >
                  {location}
                </option>
              ))}
            </select>

            <button
              className="btn btn-primary"
              onClick={() =>
                scrollToSection('listings')
              }
            >
              Search
            </button>

          </div>

        </div>

      </section>

      {/* ======================================================
          STATS
      ====================================================== */}

      <section className="stats-section">

        <div className="container stats-grid">

          <div className="stat-item">
            <span className="stat-icon">
              🏠
            </span>

            <strong>
              15+
            </strong>

            <span>
              Property Listings
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-icon">
              🤝
            </span>

            <strong>
              100+
            </strong>

            <span>
              Clients Served
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-icon">
              📍
            </span>

            <strong>
              Kenya
            </strong>

            <span>
              Property Coverage
            </span>
          </div>

          <div className="stat-item">
            <span className="stat-icon">
              ⭐
            </span>

            <strong>
              5.0
            </strong>

            <span>
              Client Experience
            </span>
          </div>

        </div>

      </section>

      {/* ======================================================
          FEATURED PROPERTIES
      ====================================================== */}

      <section className="featured-section">

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                HANDPICKED FOR YOU
              </span>

              <h2>
                Featured Properties
              </h2>

              <p>
                Explore some of our highlighted
                houses, lands and rentals.
              </p>

            </div>

            <button
              className="btn btn-outline-dark"
              onClick={() =>
                scrollToSection('listings')
              }
            >
              View All Properties →
            </button>

          </div>

          <div className="featured-grid">

            {featuredProperties.map(
              (property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isFavorite={favorites.includes(
                    property.id
                  )}
                  onFavorite={toggleFavorite}
                  onView={setSelectedProperty}
                />
              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          LISTINGS
      ====================================================== */}

      <section
        id="listings"
        className="listings-section"
      >

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              PROPERTY COLLECTION
            </span>

            <h2>
              Explore Our Properties
            </h2>

            <p>
              Search our available houses,
              land and rental opportunities.
            </p>

          </div>

          {/* FILTER PANEL */}

          <div className="filter-panel">

            <div className="filter-search">

              <label>
                Search
              </label>

              <input
                type="text"
                placeholder="Property or location..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />

            </div>

            <div className="filter-field">

              <label>
                Type
              </label>

              <select
                value={filter}
                onChange={(event) =>
                  setFilter(event.target.value)
                }
              >
                <option value="All">
                  All
                </option>

                <option value="House">
                  Houses
                </option>

                <option value="Land">
                  Land
                </option>

                <option value="Rental">
                  Rentals
                </option>
              </select>

            </div>

            <div className="filter-field">

              <label>
                Location
              </label>

              <select
                value={locationFilter}
                onChange={(event) =>
                  setLocationFilter(
                    event.target.value
                  )
                }
              >
                <option>
                  All Locations
                </option>

                {locations.map(
                  (location) => (
                    <option
                      key={location}
                      value={location}
                    >
                      {location}
                    </option>
                  )
                )}
              </select>

            </div>

            <div className="filter-field">

              <label>
                Price
              </label>

              <select
                value={priceFilter}
                onChange={(event) =>
                  setPriceFilter(
                    event.target.value
                  )
                }
              >
                <option>
                  Any Price
                </option>

                <option>
                  Under 5M
                </option>

                <option>
                  5M - 10M
                </option>

                <option>
                  10M - 20M
                </option>

                <option>
                  Above 20M
                </option>
              </select>

            </div>

            <div className="filter-field">

              <label>
                Sort
              </label>

              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(
                    event.target.value
                  )
                }
              >
                <option value="Featured">
                  Featured
                </option>

                <option value="Newest">
                  Newest
                </option>

                <option value="Price Low">
                  Price: Low to High
                </option>

                <option value="Price High">
                  Price: High to Low
                </option>
              </select>

            </div>

            <button
              className="reset-button"
              onClick={resetFilters}
            >
              Reset
            </button>

          </div>

          {/* RESULT COUNT */}

          <div className="results-header">

            <p>
              Showing{' '}
              <strong>
                {filteredProperties.length}
              </strong>{' '}
              properties
            </p>

            <p>
              {favorites.length > 0
                ? `♥ ${favorites.length} saved`
                : '♡ No saved properties'}
            </p>

          </div>

          {/* PROPERTY GRID */}

          {filteredProperties.length > 0 ? (

            <div className="property-grid">

              {filteredProperties.map(
                (property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    isFavorite={favorites.includes(
                      property.id
                    )}
                    onFavorite={toggleFavorite}
                    onView={setSelectedProperty}
                  />
                )
              )}

            </div>

          ) : (

            <div className="empty-state">

              <div className="empty-icon">
                🔎
              </div>

              <h3>
                No properties found
              </h3>

              <p>
                Try changing your search,
                location or price filters.
              </p>

              <button
                className="btn btn-primary"
                onClick={resetFilters}
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </section>

      {/* ======================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="why-section">

        <div className="container why-grid">

          <div className="why-content">

            <span className="eyebrow">
              WHY PRINCE WA PROPERTIES
            </span>

            <h2>
              More Than Property.
              <br />
              We Help You Find
              <span> Possibilities.</span>
            </h2>

            <p>
              Finding a home or investment
              property is a major decision.
              We make the process easier by
              connecting you with opportunities
              that match your needs.
            </p>

            <div className="why-list">

              <div className="why-item">

                <span>
                  ✓
                </span>

                <div>
                  <strong>
                    Professional Guidance
                  </strong>

                  <p>
                    Get practical guidance
                    throughout your property
                    search.
                  </p>
                </div>

              </div>

              <div className="why-item">

                <span>
                  ✓
                </span>

                <div>
                  <strong>
                    Local Knowledge
                  </strong>

                  <p>
                    We understand the Kenyan
                    property market and local
                    neighborhoods.
                  </p>
                </div>

              </div>

              <div className="why-item">

                <span>
                  ✓
                </span>

                <div>
                  <strong>
                    Easy Communication
                  </strong>

                  <p>
                    Contact us directly by
                    phone or WhatsApp.
                  </p>
                </div>

              </div>

            </div>

            <button
              className="btn btn-primary"
              onClick={() =>
                setShowContactForm(true)
              }
            >
              Talk To A Realtor
            </button>

          </div>

          <div className="why-card">

            <div className="why-card-inner">

              <div className="big-logo">
                <img
                  src={logo}
                  alt="Prince Wa Properties logo"
                />
              </div>

              <h3>
                PRINCE WA
                <br />
                PROPERTIES
              </h3>

              <p>
                Houses • Lands • Rentals
              </p>

              <div className="why-card-line" />

              <strong>
                Nairobi, Kenya
              </strong>

              <a href={`tel:${PHONE}`}>
                {INTERNATIONAL_PHONE}
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          SERVICES
      ====================================================== */}

      <section
        id="services"
        className="services-section"
      >

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              WHAT WE DO
            </span>

            <h2>
              Our Real Estate Services
            </h2>

            <p>
              Professional property services
              designed around your goals.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service) => (

              <div
                className="service-card"
                key={service.title}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <button
                  onClick={() =>
                    setShowContactForm(true)
                  }
                >
                  Learn More →
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="about-section"
      >

        <div className="container about-grid">

          <div className="about-image">

            <img
              src={house2}
              alt="Prince Wa Properties"
            />

            <div className="about-floating-card">

              <strong>
                15+
              </strong>

              <span>
                Property Opportunities
              </span>

            </div>

          </div>

          <div className="about-content">

            <span className="eyebrow">
              ABOUT US
            </span>

            <h2>
              Your Trusted
              <span> Property Partner</span>
            </h2>

            <p>
              Prince Wa Properties is a
              real estate brand based in
              Nairobi, Kenya, specializing
              in houses, land and rentals.
            </p>

            <p>
              We combine real estate,
              creative content and digital
              marketing to make property
              opportunities easier to
              discover.
            </p>

            <div className="about-role">

              <div className="role-icon">
                👔
              </div>

              <div>
                <strong>
                  Creative Director,
                  Content Creator & Realtor
                </strong>

                <span>
                  PRINCE WA PROPERTIES
                </span>
              </div>

            </div>

            <button
              className="btn btn-primary"
              onClick={() =>
                setShowContactForm(true)
              }
            >
              Work With Us
            </button>

          </div>

        </div>

      </section>

      {/* ======================================================
          PROCESS
      ====================================================== */}

      <section className="process-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              Finding Property Made Simple
            </h2>

          </div>

          <div className="process-grid">

            <div className="process-step">

              <div className="process-number">
                01
              </div>

              <div className="process-icon">
                🔎
              </div>

              <h3>
                Search
              </h3>

              <p>
                Browse our property listings
                and find opportunities that
                match your needs.
              </p>

            </div>

            <div className="process-step">

              <div className="process-number">
                02
              </div>

              <div className="process-icon">
                💬
              </div>

              <h3>
                Enquire
              </h3>

              <p>
                Contact us by phone or
                WhatsApp for more information.
              </p>

            </div>

            <div className="process-step">

              <div className="process-number">
                03
              </div>

              <div className="process-icon">
                🏠
              </div>

              <h3>
                View
              </h3>

              <p>
                Arrange a property viewing
                and explore the opportunity.
              </p>

            </div>

            <div className="process-step">

              <div className="process-number">
                04
              </div>

              <div className="process-icon">
                🤝
              </div>

              <h3>
                Decide
              </h3>

              <p>
                Move forward with confidence
                when you find the right property.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          CALL TO ACTION
      ====================================================== */}

      <section className="cta-section">

        <div className="container cta-content">

          <div>

            <span className="eyebrow">
              READY TO GET STARTED?
            </span>

            <h2>
              Let's Find Your Next Property.
            </h2>

            <p>
              Whether you are buying, selling,
              renting or investing, our team
              is ready to help.
            </p>

          </div>

          <div className="cta-buttons">

            <a
              href={`tel:${PHONE}`}
              className="btn btn-light"
            >
              📞 Call {INTERNATIONAL_PHONE}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              💬 WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* ======================================================
          TESTIMONIALS
      ====================================================== */}

      <section className="testimonials-section">

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              CLIENT EXPERIENCES
            </span>

            <h2>
              What Our Clients Say
            </h2>

            <p>
              We believe every property
              journey should be professional,
              transparent and memorable.
            </p>

          </div>

          <div className="testimonials-grid">

            {testimonials.map(
              (testimonial) => (

                <article
                  className="testimonial-card"
                  key={testimonial.id}
                >

                  <div className="quote-mark">
                    “
                  </div>

                  <StarRating
                    rating={
                      testimonial.rating
                    }
                  />

                  <p>
                    {testimonial.text}
                  </p>

                  <div className="testimonial-author">

                    <div className="author-avatar">
                      {testimonial.name.charAt(
                        0
                      )}
                    </div>

                    <div>

                      <strong>
                        {testimonial.name}
                      </strong>

                      <span>
                        {testimonial.role}
                      </span>

                    </div>

                  </div>

                </article>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          SOCIAL MEDIA
      ====================================================== */}

      <section className="social-section">

        <div className="container">

          <div className="social-heading">

            <span className="eyebrow">
              FOLLOW OUR PROPERTY JOURNEY
            </span>

            <h2>
              See More Properties On Social Media
            </h2>

            <p>
              Follow Prince Wa Properties for
              property tours, new listings,
              market content and real estate
              opportunities.
            </p>

          </div>

          <div className="social-grid">

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="social-card youtube"
            >

              <span>
                ▶️
              </span>

              <div>
                <strong>
                  YouTube
                </strong>

                <p>
                  @PrinceWaProperties
                </p>
              </div>

              <b>
                →
              </b>

            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="social-card instagram"
            >

              <span>
                📷
              </span>

              <div>
                <strong>
                  Instagram
                </strong>

                <p>
                  @prince_wa_properties
                </p>
              </div>

              <b>
                →
              </b>

            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              className="social-card tiktok"
            >

              <span>
                🎵
              </span>

              <div>
                <strong>
                  TikTok
                </strong>

                <p>
                  @princewaproperties
                </p>
              </div>

              <b>
                →
              </b>

            </a>

          </div>

        </div>

      </section>

      {/* ======================================================
          FAQ
      ====================================================== */}

      <section className="faq-section">

        <div className="container faq-grid">

          <div className="faq-intro">

            <span className="eyebrow">
              FAQ
            </span>

            <h2>
              Frequently Asked Questions
            </h2>

            <p>
              Have a question about buying,
              selling or renting property?
              Find some quick answers here.
            </p>

            <button
              className="btn btn-primary"
              onClick={() =>
                setShowContactForm(true)
              }
            >
              Ask Us A Question
            </button>

          </div>

          <div className="faq-list">

            {faqData.map(
              (faq, index) => (

                <div
                  className={`faq-item ${
                    activeFaq === index
                      ? 'faq-active'
                      : ''
                  }`}
                  key={faq.question}
                >

                  <button
                    onClick={() =>
                      setActiveFaq(
                        activeFaq === index
                          ? null
                          : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <b>
                      {activeFaq === index
                        ? '−'
                        : '+'}
                    </b>

                  </button>

                  {activeFaq === index && (
                    <div className="faq-answer">
                      <p>
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>

              )
            )}

          </div>

        </div>

      </section>

      {/* ======================================================
          NEWSLETTER
      ====================================================== */}

      <section className="newsletter-section">

        <div className="container newsletter-box">

          <div>

            <span className="eyebrow">
              PROPERTY UPDATES
            </span>

            <h2>
              Never Miss A New Listing
            </h2>

            <p>
              Subscribe for property updates,
              new listings and real estate news.
            </p>

          </div>

          <form
            className="newsletter-form"
            onSubmit={handleNewsletter}
          >

            <input
              type="email"
              placeholder="Your email address"
              value={newsletterEmail}
              onChange={(event) =>
                setNewsletterEmail(
                  event.target.value
                )
              }
            />

            <button
              className="btn btn-primary"
              type="submit"
            >
              Subscribe
            </button>

            {newsletterMessage && (
              <span className="newsletter-message">
                {newsletterMessage}
              </span>
            )}

          </form>

        </div>

      </section>

      {/* ======================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="container">

          <div className="section-heading centered">

            <span className="eyebrow">
              CONTACT PRINCE WA PROPERTIES
            </span>

            <h2>
              Let's Talk Property
            </h2>

            <p>
              Have a question, want to view
              a property or list your own?
              Get in touch.
            </p>

          </div>

          <div className="contact-grid">

            <div className="contact-info">

              <div className="contact-info-card">

                <div className="contact-icon">
                  📞
                </div>

                <div>

                  <span>
                    Call Us
                  </span>

                  <a
                    href={`tel:${PHONE}`}
                  >
                    {INTERNATIONAL_PHONE}
                  </a>

                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">
                  💬
                </div>

                <div>

                  <span>
                    WhatsApp
                  </span>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chat With Us
                  </a>

                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">
                  📍
                </div>

                <div>

                  <span>
                    Location
                  </span>

                  <strong>
                    Nairobi, Kenya
                  </strong>

                </div>

              </div>

              <div className="contact-info-card">

                <div className="contact-icon">
                  👔
                </div>

                <div>

                  <span>
                    Role
                  </span>

                  <strong>
                    Creative Director,
                    Content Creator & Realtor
                  </strong>

                </div>

              </div>

            </div>

            <div className="contact-form-card">

              <h3>
                Send An Enquiry
              </h3>

              <p>
                Tell us what property you
                are looking for.
              </p>

              <form
                onSubmit={submitContact}
              >

                <div className="form-row">

                  <div className="form-group">

                    <label>
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      value={
                        contactForm.name
                      }
                      onChange={
                        handleContactChange
                      }
                      placeholder="Your name"
                    />

                  </div>

                  <div className="form-group">

                    <label>
                      Phone
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      value={
                        contactForm.phone
                      }
                      onChange={
                        handleContactChange
                      }
                      placeholder="Your phone"
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      contactForm.email
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="Your email"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Property Interest
                  </label>

                  <select
                    name="property"
                    value={
                      contactForm.property
                    }
                    onChange={
                      handleContactChange
                    }
                  >

                    <option value="">
                      Select property type
                    </option>

                    <option>
                      House
                    </option>

                    <option>
                      Land
                    </option>

                    <option>
                      Rental
                    </option>

                    <option>
                      Property Investment
                    </option>

                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={
                      contactForm.message
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="Tell us what you are looking for..."
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                >
                  Send Via WhatsApp
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================
          LIST PROPERTY CTA
      ====================================================== */}

      <section className="list-property-section">

        <div className="container list-property-box">

          <div>

            <span className="eyebrow">
              SELL OR RENT YOUR PROPERTY
            </span>

            <h2>
              Have A Property To List?
            </h2>

            <p>
              Let Prince Wa Properties help
              you market your property to
              potential buyers and tenants.
            </p>

          </div>

          <button
            className="btn btn-light btn-large"
            onClick={() =>
              setShowListingForm(true)
            }
          >
            List My Property
          </button>

        </div>

      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="container footer-grid">

          <div className="footer-brand">

            <div className="footer-logo-box">

              <img
                src={logo}
                alt="Prince Wa Properties"
              />

            </div>

            <h3>
              PRINCE WA PROPERTIES
            </h3>

            <p>
              Houses | Lands | Rentals
            </p>

            <p>
              Your trusted real estate
              partner in Nairobi, Kenya.
            </p>

          </div>

          <div className="footer-column">

            <h4>
              Quick Links
            </h4>

            <button
              onClick={() =>
                scrollToSection('home')
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection('listings')
              }
            >
              Properties
            </button>

            <button
              onClick={() =>
                scrollToSection('services')
              }
            >
              Services
            </button>

            <button
              onClick={() =>
                scrollToSection('about')
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollToSection('contact')
              }
            >
              Contact
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Property Types
            </h4>

            <button
              onClick={() => {
                setFilter('House');
                scrollToSection(
                  'listings'
                );
              }}
            >
              Houses
            </button>

            <button
              onClick={() => {
                setFilter('Land');
                scrollToSection(
                  'listings'
                );
              }}
            >
              Land
            </button>

            <button
              onClick={() => {
                setFilter('Rental');
                scrollToSection(
                  'listings'
                );
              }}
            >
              Rentals
            </button>

            <button
              onClick={() =>
                setShowListingForm(true)
              }
            >
              List Property
            </button>

          </div>

          <div className="footer-column">

            <h4>
              Contact
            </h4>

            <a href={`tel:${PHONE}`}>
              📞 {INTERNATIONAL_PHONE}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp
            </a>

            <a href="#contact">
              📍 Nairobi, Kenya
            </a>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
            >
              ▶️ YouTube
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              📷 Instagram
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
            >
              🎵 TikTok
            </a>

          </div>

        </div>

        <div className="footer-bottom">

          <div className="container footer-bottom-inner">

            <p>
              © {new Date().getFullYear()}{' '}
              Prince Wa Properties.
              All rights reserved.
            </p>

            <p>
              Houses • Lands • Rentals
            </p>

          </div>

        </div>

      </footer>

      {/* ======================================================
          PROPERTY DETAILS MODAL
      ====================================================== */}

      <PropertyModal
        property={selectedProperty}
        onClose={() =>
          setSelectedProperty(null)
        }
      />

      {/* ======================================================
          CONTACT MODAL
      ====================================================== */}

      {showContactForm && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowContactForm(false)
          }
        >

          <div
            className="form-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setShowContactForm(false)
              }
            >
              ×
            </button>

            <div className="modal-form-header">

              <span className="eyebrow">
                CONTACT US
              </span>

              <h2>
                Tell Us What You Need
              </h2>

              <p>
                Fill in the form and we'll
                connect with you through
                WhatsApp.
              </p>

            </div>

            <form
              onSubmit={submitContact}
              className="modal-form"
            >

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={
                      contactForm.name
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="Your full name"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={
                      contactForm.phone
                    }
                    onChange={
                      handleContactChange
                    }
                    placeholder="0757..."
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    contactForm.email
                  }
                  onChange={
                    handleContactChange
                  }
                  placeholder="you@example.com"
                />

              </div>

              <div className="form-group">

                <label>
                  What are you looking for?
                </label>

                <select
                  name="property"
                  value={
                    contactForm.property
                  }
                  onChange={
                    handleContactChange
                  }
                >

                  <option value="">
                    Choose an option
                  </option>

                  <option>
                    House For Sale
                  </option>

                  <option>
                    Land For Sale
                  </option>

                  <option>
                    Rental Property
                  </option>

                  <option>
                    Property Investment
                  </option>

                  <option>
                    Other
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  value={
                    contactForm.message
                  }
                  onChange={
                    handleContactChange
                  }
                  placeholder="Tell us about your property requirements..."
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
              >
                💬 Send To WhatsApp
              </button>

            </form>

          </div>

        </div>

      )}

      {/* ======================================================
          LIST PROPERTY MODAL
      ====================================================== */}

      {showListingForm && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowListingForm(false)
          }
        >

          <div
            className="form-modal listing-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setShowListingForm(false)
              }
            >
              ×
            </button>

            <div className="modal-form-header">

              <span className="eyebrow">
                LIST YOUR PROPERTY
              </span>

              <h2>
                Sell Or Rent With Us
              </h2>

              <p>
                Submit your property details
                and we'll contact you.
              </p>

            </div>

            <form
              onSubmit={submitListing}
              className="modal-form"
            >

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={
                      listingForm.name
                    }
                    onChange={
                      handleListingChange
                    }
                    placeholder="Full name"
                  />

                </div>

                <div className="form-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={
                      listingForm.phone
                    }
                    onChange={
                      handleListingChange
                    }
                    placeholder="Phone number"
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    listingForm.email
                  }
                  onChange={
                    handleListingChange
                  }
                  placeholder="Email address"
                />

              </div>

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Property Type
                  </label>

                  <select
                    name="propertyType"
                    value={
                      listingForm.propertyType
                    }
                    onChange={
                      handleListingChange
                    }
                  >

                    <option>
                      House
                    </option>

                    <option>
                      Land
                    </option>

                    <option>
                      Rental
                    </option>

                    <option>
                      Commercial
                    </option>

                  </select>

                </div>

                <div className="form-group">

                  <label>
                    Asking Price
                  </label>

                  <input
                    type="text"
                    name="price"
                    value={
                      listingForm.price
                    }
                    onChange={
                      handleListingChange
                    }
                    placeholder="e.g. KSh 10,000,000"
                  />

                </div>

              </div>

              <div className="form-group">

                <label>
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  required
                  value={
                    listingForm.location
                  }
                  onChange={
                    handleListingChange
                  }
                  placeholder="Property location"
                />

              </div>

              <div className="form-group">

                <label>
                  Property Description
                </label>

                <textarea
                  name="description"
                  rows="4"
                  required
                  value={
                    listingForm.description
                  }
                  onChange={
                    handleListingChange
                  }
                  placeholder="Describe your property..."
                />

              </div>

              <div className="form-group">

                <label>
                  Property Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={
                    handleListingImage
                  }
                />

              </div>

              {listingPreview && (

                <div className="upload-preview">

                  <img
                    src={listingPreview}
                    alt="Property preview"
                  />

                  <p>
                    Image preview
                  </p>

                </div>

              )}

              <button
                type="submit"
                className="btn btn-primary btn-full"
              >
                💬 Submit Property Via WhatsApp
              </button>

            </form>

          </div>

        </div>

      )}

      {/* ======================================================
          FLOATING WHATSAPP
      ====================================================== */}

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

      {/* ======================================================
          SCROLL TO TOP
      ====================================================== */}

      {showTopButton && (

        <button
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>

      )}

    </div>
  );
}

export default App;