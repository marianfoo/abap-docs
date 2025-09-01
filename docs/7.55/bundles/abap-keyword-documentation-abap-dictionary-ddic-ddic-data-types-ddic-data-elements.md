# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Data Elements

Included pages: 7


### abenddic_data_elements.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) → 

DDIC - Data Elements

A data element in ABAP Dictionary defines an [elementary data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_type_glosry.htm "Glossary Entry") and describes, alongside the technical type attributes, the semantic meaning of an object defined with reference to the data element. Data elements are the elementary parts of complex types such as [DDIC structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures.htm), [DDIC table types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_types.htm), or [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm). An internal program object declared with reference to a data element always has one of the elementary built-in ABAP types. The type in question is defined by the mapping of the [built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in ABAP Dictionary to ABAP types.

-   [Technical attributes of data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_tech.htm)

-   [Semantic attributes of data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_sema.htm)

Hints

-   The technical attributes of a data element can be defined either directly or by using a reusable [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm). This is why the concept is known as a two-level domain concept.

-   Data elements can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm) and in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").

-   The name of a data element must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_names.htm).

Continue
[DDIC - Technical Attributes of Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_tech.htm)
[DDIC - Semantic Attributes of Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_sema.htm)
[DDIC - Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm)


### abenddic_data_elements_tech.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) → 

DDIC - Technical Attributes of Data Elements

A data element describes an [elementary data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_type_glosry.htm "Glossary Entry") with the following technical attributes:

-   Elementary type

A data element that describes an elementary type has a [built-in data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) from ABAP Dictionary, a length, and an (optional) number of fractional digits as its technical attributes. These technical attributes are defined either directly in the data element or are applied from a [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm).

-   Reference type

A data element that describes a reference type is either a type for a [data reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or for an [object reference variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry").

-   The [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") for a data reference variable is either the generic type DATA, any data type from ABAP Dictionary (including [DDIC database tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) or [views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm)), or a directly specified [built-in data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

-   The [static type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatic_type_glosry.htm "Glossary Entry") for an object reference variable is either the generic type OBJECT or a global class or global interface from the [class library](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_library_glosry.htm "Glossary Entry").

Hints

-   When existing data elements are modified, all consumers of the data element are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_adj.htm) necessary.

-   Global reference types in ABAP Dictionary can be used to specify types in ABAP programs. They cannot, however, be used for fields of database tables or in CDS entities.

Example

The data element S\_CONN\_ID takes its technical attributes (data type NUMC, length 4) from the domain S\_CONN\_ID. The data element S\_CONN\_ID has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic attributes, such as the column CONNID of the DDIC database tables SPFLI, SBOOK, and SFLIGHT.


### abenddic_data_elements_sema.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) → 

DDIC - Semantic Attributes of Data Elements

The semantic attributes of data elements are mainly significant when they are used as types of fields on user interfaces such as [dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") (or [Web Dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenweb_dynpro_glosry.htm "Glossary Entry")) fields . The only exceptions to this are the default component name and the flag for the change document. ABAP data objects declared with reference to a data element ignore the semantic attributes of the element.

-   Short text

Short text of the data element. The short text assigned to a data element appears as a header in a [field help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_help_glosry.htm "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element.

-   Field label

The short, medium, and long field labels assigned to a data element, plus a header, can be created where appropriate as descriptions or column headers of lists for fields on screens of dynpros or Web Dynpros with direct or indirect reference to the data element. A freely definable maximum length with varying upper limits for the different field labels is applied to all languages and must be set accordingly.

-   Documentation

Documentation of the data element. The documentation created for a data element appears by default as [field help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_help_glosry.htm "Glossary Entry") for all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element. If no documentation was created, only the short text appears.

-   Supplement documentation

Additional supplement documentation objects can be created for a data element, with each documentation object identified by a four-digit number. This supplement documentation can be used for program-specific and dynpro-specific [field helps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_field_help.htm). The assignment of supplement documentation to a dynpro field is saved in the DDIC database table THLPF.

-   Documentation status

The status of the documentation for a data element can be noted as follows for any check tools:

-   Object is documented
    The default setting, indicating that the data element requires documentation.

-   Object not used on a screen
    The data element is not implemented for screen fields of dynpro fields or Web Dynpro fields and no further documentation is required.

-   Object is documented by its short text.
    The short text provides enough documentation.

-   Documentation is currently on hold
    The data element requires documentation but it does not yet exist.

-   Search help

A data element with an elementary data type can be assigned a [search help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_help_glosry.htm "Glossary Entry") and a parameter can be passed to this search help.
This search help is used for the [input help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninput_help_glosry.htm "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element, unless the dynpro field is itself associated with a search help. Search helps cannot be assigned to a data element with a reference type.

-   SPA/GPA parameter

A data element with an elementary data type can be associated with an [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenspa_gpa.htm).
Dynpro fields defined with direct or indirect reference to the data element can be filled with the content of the parameter, unless the dynpro field is itself associated with an SPA/GPA parameter. A data element with a reference type cannot be associated with an SPA/GPA parameter.

-   Flag for input history

The flag for the input history defines whether the input history in SAP GUI is active for dynpro fields defined with direct or indirect reference to the data element. This makes it possible to switch the input history off for sensitive fields.

-   Flag for bidirectional fonts

This flag defines the behavior of dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element when handling bidirectional fonts (such as Hebrew or Arabic).

-   Writing direction
    This flag can specify the writing direction of a dynpro field as "From left to right", which overwrites the direction "From right to left" specified by logons in a bidirectional font. This flag can be useful for fields with numeric texts.

-   BIDI filter
    This flag can be used to prevent the Unicode formatting characters that specify the writing direction of bidirectional fonts in data transports between GUI and AS ABAP from being filtered out, regardless of the global system settings. The global system setting is made in the program I18N\_SET\_DATAELEMENT\_FLAGS.

-   Default component name

The default component name of a data element is a naming suggestion for structure components or table fields defined with reference to this data element. Structures used in APIs in particular should use this proposal.

-   Flag for change document

The flag for change documents specifies whether changes to fields in DDIC database tables defined with reference to this data element are logged when change document objects are involved. A change document object groups multiple tables and is used to generate function modules that can be integrated into ABAP programs and that log changes. This flag cannot be set for data elements with a reference type.

-   Further semantic attributes can be defined in the [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm) referenced by a data element.

The texts in the semantic attributes (the short text, field labels, and documentation) are, like all AS ABAP texts, passed to the translation tools.

Hint

It is highly significant that many semantic attributes of a data element define the behavior of dynpro fields or Web Dynpro fields. For example, a data element whose documentation describes the internal attributes of a technical type is not usually suitable for use in UI fields. One example are the data elements SYST\_... that define the components of the system structure SYST. The documentation of these data elements describes the corresponding system fields and must not appear on a UI. Ideally, separate data elements are created with their own semantic attributes for UIs and DDIC database tables. Any data elements not used for UI fields do not usually need semantic attributes (except for the short text and possibly documentation). Conversely, attributes such as the flag for change documents are not relevant for data elements for UIs.


### abenddic_domains.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) → 

DDIC - Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)

-   [Semantic attributes of domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)

The name of a domain must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_names.htm) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as special literals in [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm) and in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Attributes of Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)
[DDIC - Semantic Attributes of Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)


### abenddic_domains_tech.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm) → 

DDIC - Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose following technical attributes are defined directly in the domain:

-   [Built-in data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in ABAP Dictionary

-   Length

-   A number of fractional digits (optional)

Hint

When existing domains are modified, all consumers of the domain are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for the fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_adj.htm) necessary.


### abenddic_domains_sema.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm) → 

DDIC - Semantic Attributes of Domains

Domains can be given the following semantic attributes:

-   Short text

Each domain has a short description specified when it is created.

-   Documentation

A domain can be given (optional) documentation.

-   Output attributes

The output attributes determine how fields defined with reference to a data element that references the domain are displayed on [dynpros or Web Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry") or when formatted with the statements [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm).

-   Output length
    The (optional) output length overrides the [implicit output length](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwrite_output_length.htm) as assigned to the built-in elementary data types. The potential output length is determined by the data type and is checked by ABAP Dictionary [tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm). If a format is assigned to the built-in data type in question, the output length should be long enough for all formatting characters.

-   Output style
    A domain with the type of a decimal floating point number must be assigned an [output style](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm).

-   Conversion routine
    If a domain is assigned to a [conversion routine](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_routine_glosry.htm "Glossary Entry"), the associated function module ...\_INPUT (for each input in a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") defined with reference to a data element that itself references the domain) is called. Similarly, the associated function module ...\_OUTPUT (for each output using a dynpro field defined with reference to a data element that itself references the domain) is also called. The function module ...\_OUTPUT is executed in the same way when a data object is formatted using [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm) when the data object is declared with reference to a data element of this type.

-   Sign
    If a data type of a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") defined in ABAP Dictionary is numeric, the "Sign" attribute must be set so that negative numbers can be displayed on the screen. This attribute can only be specified using a domain.

-   Lowercase letters
    If a data type of a [dynpro field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") defined in ABAP Dictionary is character-like, the "Lowercase Letters" attribute can be set so that these letters are not transformed to uppercase. This attribute can only be specified using a domain.

-   Time format
    For the data type [TIMS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), a 24-hour or 12-hour format can be set for displaying dynpro fields in accordance with the ABAP [time formats](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_formats.htm).

-   Value range
    

Value ranges for fields on user interfaces can be defined for domains of the [built-in types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) CHAR, NUMC, DEC, INT1, INT2, INT4, and INT8. For domains of the types CHAR and NUMC, this range specifies the valid input values in dynpro fields defined with reference to a data element of the domain in question. The value range is evaluated for all types for the [input help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninput_help_glosry.htm "Glossary Entry") of [dynpro fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of DDIC database table fields that reference a data element with a domain of this type. A value range can be defined using the following:

-   Fixed values

-   Intervals

Fixed values and intervals can be combined here as required. The following can be specified as fixed values and interval boundaries:

-   Alphanumeric characters including blanks and special characters for the type CHAR. The length is restricted to 10.

-   Positive integers (including 0) for the types NUMC, INT1, INT2, INT4, INT8, and DEC within the [value range](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) defined by the technical attributes.

A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The fixed values provided by SAP can be enhanced by customers or partners using [fixed value appends](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_fixed_value_appends.htm).

-   Value table

A value table can be a DDIC database table that is used as a default for the [check table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_checktab.htm) in cases where a table field of a DDIC database table that references a data element with this domain is included in a [foreign key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_forkey.htm). Just specifying a value table does not trigger a check.

Example

The domain S\_CLASS with the type CHAR describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values "C" (Business Class), "F" (First Class), and "Y" (Economy Class). This means that only the values "C", "F", and "Y" can be entered for all dynpro fields that point to this domain.


### abenddic_domains.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) → 

DDIC - Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)

-   [Semantic attributes of domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)

The name of a domain must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_types_names.htm) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as special literals in [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_tools.htm) and in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Attributes of Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)
[DDIC - Semantic Attributes of Domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)
