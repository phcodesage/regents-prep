import { useEffect } from 'react';
import Lenis from 'lenis';
import { BookOpen, Calendar, CheckCircle, GraduationCap, Star, Award } from 'lucide-react';
import heroImage from './sat-img.png';

interface ClassSchedule {
  name: string;
  price: string;
  dates: { month: string; days: string }[];
}

const classSchedules: ClassSchedule[] = [
  {
    name: 'Algebra 1',
    price: '$1,795',
    dates: [
      { month: 'April', days: '12, 19, 26' },
      { month: 'May', days: '3, 10, 17, 24' },
      { month: 'June', days: '7, 15, 16' },
    ],
  },
  {
    name: 'Algebra 2 / Trig',
    price: '$2,095',
    dates: [
      { month: 'March', days: '15, 22, 29' },
      { month: 'April', days: '12, 19, 26' },
      { month: 'May', days: '3, 10, 17, 24' },
      { month: 'June', days: '7, 8, 9' },
    ],
  },
  {
    name: 'Geometry',
    price: '$1,795',
    dates: [
      { month: 'April', days: '22, 27, 29' },
      { month: 'May', days: '4, 6, 11, 13, 18, 20, 25, 27' },
      { month: 'June', days: '1, 3, 8, 10, 15, 17, 21, 22' },
    ],
  },
  {
    name: 'Chemistry',
    price: '$1,995',
    dates: [
      { month: 'March', days: '24, 25, 31' },
      { month: 'April', days: '14, 15, 21, 22, 28, 29' },
      { month: 'May', days: '5, 6, 12, 13, 19, 20, 27' },
      { month: 'June', days: '2, 3, 7, 8' },
    ],
  },
  {
    name: 'Physics',
    price: '$2,097',
    dates: [
      { month: 'March', days: '15, 22, 29' },
      { month: 'April', days: '12, 19, 26' },
      { month: 'May', days: '3, 10, 17, 24' },
      { month: 'June', days: '9, 14' },
    ],
  },
  {
    name: 'Living Environment',
    price: '$1,595',
    dates: [
      { month: 'May', days: '19, 26' },
      { month: 'June', days: '2, 9, 14, 15, 16' },
    ],
  },
  {
    name: 'Earth Science',
    price: '$1,595',
    dates: [
      { month: 'May', days: '8, 15, 22, 29' },
      { month: 'June', days: '5, 12, 17' },
    ],
  },
];

const inclusions = [
  'Notes Materials',
  'Comprehensive Worksheets',
  '2 FREE Review Sessions',
  'Exam Practice Day',
  'Expert Instructors',
  'Small Class Sizes',
];

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="bg-dark text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <GraduationCap size={32} className="text-primary" />
            <span className="text-2xl font-bold font-serif">Regents Prep 2026</span>
          </div>
        </div>
      </nav>

      <section className="bg-softPink py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Star size={20} className="text-primary fill-primary" />
              <span className="text-lg text-dark font-semibold">Classes Starting March 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-dark mb-6 leading-tight">
              Regents Prep Classes
              <span className="block text-primary mt-2">2026</span>
            </h1>
            <p className="text-xl md:text-2xl text-dark/80 mb-8 leading-relaxed">
              Expert-led preparation courses designed to help you excel in your Regents exams.
              Comprehensive curriculum, proven results, and dedicated support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Courses
              </button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Students studying"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle element */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-full border-4 border-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold font-serif text-dark mb-4">Our Courses</h2>
            <p className="text-xl text-dark/70">Choose the course that fits your academic goals</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classSchedules.map((course) => (
              <div
                key={course.name}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold font-serif text-dark mb-2">{course.name}</h3>
                    <p className="text-4xl font-bold text-primary">{course.price}</p>
                  </div>
                  <BookOpen className="text-primary" size={32} />
                </div>
                <div className="space-y-3 mt-6">
                  {course.dates.map((date, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Calendar size={18} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <span className="text-lg font-semibold text-dark">{date.month}:</span>
                        <span className="text-lg text-dark/70 ml-2">{date.days}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-softPink">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Award className="inline-block text-primary mb-4" size={48} />
            <h2 className="text-5xl font-bold font-serif text-dark mb-4">What's Included</h2>
            <p className="text-xl text-dark/70">Everything you need to succeed</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="text-primary flex-shrink-0" size={24} />
                <span className="text-dark font-semibold text-xl">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold font-serif mb-6">Ready to Excel?</h2>
          <p className="text-2xl mb-8 text-white/90 leading-relaxed">
            Join hundreds of students who have achieved their academic goals with our expert-led Regents prep courses.
            Secure your spot today!
          </p>
          <div className="mt-12 pt-12 border-t border-white/20 text-lg text-white/70">
            <p>Questions? Contact us for more information about our prep courses.</p>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white/60 py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center gap-2 mb-4 text-white/80">
            <p className="text-xl font-semibold">+1 (516) 226-3114</p>
            <p className="text-xl">
              <a href="https://www.exceedlearningcenterny.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                www.exceedlearningcenterny.com
              </a>
            </p>
          </div>
          <p className="text-base">
            © 2026 Regents Prep Classes. Excellence in Education.
          </p>
        </div>
      </footer>
    </div >
  );
}

export default App;
