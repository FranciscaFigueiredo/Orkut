import {
    BioDescription,
    DescriptionFields,
    Field,
    FieldDescription,
    Fields,
    HeartBlueIcon,
    HeartPinkIcon,
    LeftFields,
    Line,
    RightFields,
    SmileIcon,
    StarIcon,
    StatusDescription,
    TitleBio,
} from '../styles/BiographyStyle';

export function Biography() {
    const testimonials = 114;
    const fans = 14;

    return (
        <BioDescription>
            <TitleBio>Bio</TitleBio>
            <StatusDescription>
                <Fields>
                    <Field><span>depoimentos</span></Field>
                    <Field><span>fãs</span></Field>
                    <Field><span>confiavel</span></Field>
                    <Field><span>legal</span></Field>
                    <Field><span>sexy</span></Field>
                </Fields>
                <Fields>
                    <Field>
                        <HeartPinkIcon />
                        <span>{ testimonials }</span>
                    </Field>
                    <Field>
                        <StarIcon />
                        <span>{ fans }</span>
                    </Field>
                    <Field>
                        <SmileIcon />
                        <SmileIcon />
                        <SmileIcon />
                    </Field>
                    <Field>
                        <HeartBlueIcon />
                        <HeartBlueIcon />
                        <HeartBlueIcon />
                    </Field>
                    <Field>
                        <HeartPinkIcon />
                        <HeartPinkIcon />
                        <HeartPinkIcon />
                    </Field>
                </Fields>
            </StatusDescription>
            <Line />
            <DescriptionFields>
                <LeftFields>
                    <FieldDescription>sobre mim:</FieldDescription>
                    <FieldDescription>idade:</FieldDescription>
                    <FieldDescription>orientação:</FieldDescription>
                    <FieldDescription>relacionamento:</FieldDescription>
                    <FieldDescription>cidade:</FieldDescription>
                    <FieldDescription>interesses:</FieldDescription>
                    <FieldDescription>estilo:</FieldDescription>
                </LeftFields>
                <RightFields>
                    <FieldDescription>Não informado</FieldDescription>
                    <FieldDescription>Não informado</FieldDescription>
                    <FieldDescription>Não informado</FieldDescription>
                    <FieldDescription>Não informado</FieldDescription>
                    <FieldDescription>Não informado</FieldDescription>
                    <FieldDescription>Não informado</FieldDescription>
                    <FieldDescription>Não informado</FieldDescription>
                </RightFields>
            </DescriptionFields>
        </BioDescription>
    );
}
