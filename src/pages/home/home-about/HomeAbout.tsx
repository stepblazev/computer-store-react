import { FC } from 'react';
import styles from './home-about.module.scss';

const HomeAbout: FC = () => {
	return (
		<div className={styles.about}>
			<h2 className={styles.about__title}>Информация о нас</h2>
			<div className={styles.about__content}>
				<p>
					Мы команда энтузиастов, предлагающая широкий выбор комплектующих к компьютерам,
					готовых сборок, ноутбуков, мониторов и многого другого. Мы стремимся обеспечить
					наших клиентов современными и высококачественными продуктами, чтобы
					удовлетворить их потребности в области технологий.
				</p>
				<p>
					В Technomall мы понимаем, что каждый клиент уникален и имеет свои собственные
					требования. Поэтому мы предлагаем широкий выбор товаров, чтобы помочь вам
					создать идеальную компьютерную систему или найти подходящий готовый вариант.
					Наша команда экспертов всегда готова оказать вам помощь и дать профессиональные
					рекомендации, чтобы вы сделали оптимальный выбор.
				</p>
				<p>
					Мы гордимся нашим широким ассортиментом товаров от ведущих мировых
					производителей, таких как Intel, AMD, NVIDIA, ASUS, Samsung и многих других. Все
					товары проходят строгий контроль качества, чтобы гарантировать надежность и
					долговечность. Мы предлагаем только те товары, которыми сами были бы довольны.
				</p>
				<p>
					В Technomall мы также уделяем особое внимание качеству обслуживания наших
					клиентов. Мы стремимся обеспечить быструю доставку, удобные способы оплаты и
					отличную поддержку. Ваше удовлетворение - наш приоритет, и мы готовы сделать все
					возможное, чтобы вы остались довольны своей покупкой.
				</p>
				<p>
					Мы приглашаем вас исследовать наш сайт и обнаружить все возможности, которые мы
					предлагаем. Если у вас возникли вопросы или вам требуется помощь, не стесняйтесь
					обращаться к нашей дружелюбной службе поддержки.
				</p>
				<p>
					Спасибо, что выбрали Technomall. Мы надеемся, что наши продукты и услуги
					превзойдут ваши ожидания!
				</p>
			</div>
		</div>
	);
};

export default HomeAbout;
