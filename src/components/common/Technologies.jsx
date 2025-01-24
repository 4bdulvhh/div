import React from 'react';

const Technologies = ({ showFullstack = true, showDataScience = true }) => {
  const fullstackTechnologies = [
    { id: 1, name: 'HTML', icon: '/images/html5.png' },
    { id: 2, name: 'CSS', icon: '/images/css.png' },
    { id: 3, name: 'Sass', icon: '/images/sass.png' },
    { id: 4, name: 'Bootstrap', icon: '/images/boostrap.png' },
    { id: 5, name: 'JavaScript', icon: '/images/javascript.png' },
    { id: 6, name: 'jQuery', icon: '/images/jquery.png' },
    { id: 7, name: 'AJAX', icon: '/images/ajax.png' },
    { id: 8, name: 'JSON', icon: '/images/json.png' },
    { id: 9, name: 'XML', icon: '/images/xml.png' },
    { id: 10, name: 'React', icon: '/images/react.png' },
    { id: 11, name: 'Next.js', icon: '/images/nextjs.png' },
    { id: 12, name: 'Node.js', icon: '/images/nodejs.png' },
    { id: 13, name: 'NPM', icon: '/images/npm.png' },
    { id: 14, name: 'Express', icon: '/images/expressjs.png' },
    { id: 15, name: 'GitHub', icon: '/images/github.png' },
    { id: 16, name: 'MongoDB', icon: '/images/mongodb.png' },
  ];

  const dataScienceTechnologies = [
    { id: 1, name: 'Python', icon: '/images/python.png' },
    { id: 2, name: 'NumPy', icon: '/images/numpy.svg.png' },
    { id: 3, name: 'Pandas', icon: '/images/python-pandas.png' },
    { id: 4, name: 'Matplotlib', icon: '/images/matplot.png' },
    { id: 5, name: 'SQL', icon: '/images/sql.png' },
    { id: 6, name: 'MongoDB', icon: '/images/mongodb.png' },
    { id: 7, name: 'Apache Airflow', icon: '/images/airflow.png' },
    { id: 8, name: 'AWS', icon: '/images/aws.png' },
    { id: 9, name: 'Amazon S3', icon: '/images/s3.png' },
    { id: 10, name: 'Hadoop', icon: '/images/hadoop.png' },
    { id: 11, name: 'Spark', icon: '/images/spark.png' },
    { id: 12, name: 'Kafka', icon: '/images/kafka.png' },
    { id: 13, name: 'Amazon Lex', icon: '/images/lex.png' },
    { id: 14, name: 'Excel', icon: '/images/excel.png' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {showFullstack && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Sıfırdan öyrənəcəyin texnologiyalar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {fullstackTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-3"
                />
                <span className="text-sm font-medium text-gray-700 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {showDataScience && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Sıfırdan öyrənəcəyin texnologiyalar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {dataScienceTechnologies.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain mb-3"
                />
                <span className="text-sm font-medium text-gray-700 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;
