import css from "./Statistics.module.css"
import PropTypes from 'prop-types';

const Statistics = ({title,stats}) => {
    return (
        <section className={css.statistics}>
            <h2 className="title">{title}</h2>

        <ul className="stat-list">
            {stats.map(el => (<li className="item" key={el.id}>
                <span className="label">{el.label}  </span>
                <span className="percentage">{el.percentage}</span>
    </li>))}
            </ul>
            </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired
}

export default Statistics;


