  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_data_types.htm) →  [Data Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_data_elements.htm) →  [Domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_domains.htm) → 

Semantic Attributes of Domains

Domains can be given the following semantic attributes:

-   Short text

Each domain has a short description specified when it is created.

-   Documentation

A domain can be given (optional) documentation.

-   Output attributes

The output attributes determine how fields defined with reference to a data element (that itself references the domain) are displayed on [dynpros or Web Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") or when formatted with the statements [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm).

-   Output length
    The (optional) output length overrides the [implicit output length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm) as assigned to the built-in elementary data types. The potential output length is determined by the data type and is checked by ABAP Dictionary [tools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm). If a format is assigned to the built-in data type in question, the output length should be long enough for all formatting characters.

-   Output style
    A domain with the type of a decimal floating point number must be assigned an [output style](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_decimal_floating_point.htm).

-   Conversion routine
    If a domain is assigned to a [conversion routine](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_routine_glosry.htm "Glossary Entry"), the associated function module ...\_INPUT (for each input in a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") defined with reference to a data element that itself references the domain) is called. Similarly, the associated function module ...\_OUTPUT (for each output using a dynpro field defined with reference to a data element that itself references the domain) is also called. The function module ...\_OUTPUT is executed in the same way when a data object is formatted using [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) when the data object is declared with reference to a data element of this type.
    

-   Sign
    If a data type of a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") defined in ABAP Dictionary is numeric, the "Sign" attribute must be set so that negative numbers can be displayed on the screen. This attribute can only be specified using a domain.

-   Lowercase letters
    If a data type of a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") defined in ABAP Dictionary is character-like, the "Lowercase Letters" attribute can be set so that these letters are not transformed to uppercase. This attribute can only be specified using a domain.

-   Time format
    For the data type [TIMS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm), a 24-hour or 12-hour format can be set for displaying dynpro fields in accordance with the ABAP [time formats](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_formats.htm).

-   Value range

Value ranges can be defined for domains of the [built-in types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) CHAR, NUMC, DEC, INT1, INT2, INT4, and INT8. For domains of the types CHAR and NUMC, this range specifies the valid input values in dynpro fields defined with reference to a data element of the domain in question. The value range is evaluated for all types for the [input help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_help_glosry.htm "Glossary Entry") of [dynpro fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of database table fields that reference a data element with a domain of this type. A value range can be defined using the following:

-   Fixed values

-   Intervals

Fixed values and intervals can be combined here as required. The following can be specified as fixed values and interval boundaries:

-   Alphanumeric characters including blanks and special characters for the type CHAR. The length is restricted to 10.

-   Positive integers (including 0) for the types NUMC, INT1, INT2, INT4, INT8, and DEC within the [value range](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) defined by the technical attributes.

A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special [literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_literal.htm) in a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"). The fixed values provided by SAP can be enhanced by customers or partners using [fixed value appends](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_fixed_value_appends.htm).

-   Value table

A value table can be a database table that is used as a default for the [check table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_checktab.htm) in cases where a table field of a database table that references a data element with this domain is included in a [foreign key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_forkey.htm). Just specifying a value table does not trigger a check.

Example

The domain S\_CLASS with the type CHAR describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values "C" (Business Class), "F“ (First Class), and "Y“ (Economy Class). This means that only the values "C", "F", and "Y" can be entered for all dynpro fields that point to this domain.