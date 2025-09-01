# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Data Types / Data Elements

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenddic_data_elements.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm)
- [abenddic_data_elements_tech.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements_tech.htm)
- [abenddic_data_elements_sema.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements_sema.htm)
- [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm)
- [abenddic_domains_tech.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains_tech.htm)
- [abenddic_domains_sema.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains_sema.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.144Z

---

### abenddic_data_elements.htm

> **📖 Official SAP Documentation**: [abenddic_data_elements.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

Data Elements

A data element in ABAP Dictionary defines an [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") and describes, alongside the technical type attributes, the semantic meaning of an object defined with reference to the data element. Data elements are the elementary parts of complex types such as [structures](javascript:call_link\('abenddic_structures.htm'\)), [table types](javascript:call_link\('abenddic_table_types.htm'\)), or [database tables](javascript:call_link\('abenddic_database_tables.htm'\)). An internal program object declared with reference to a data element always has one of the elementary built-in ABAP types. The type in question is defined by the mapping of the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary to ABAP types.

-   [Technical attributes of data elements](javascript:call_link\('abenddic_data_elements_tech.htm'\))

-   [Semantic attributes of data elements](javascript:call_link\('abenddic_data_elements_sema.htm'\))

Notes

-   The technical attributes of a data element can be defined either directly or by using a reusable [domain](javascript:call_link\('abenddic_domains.htm'\)). This is why the concept is known as a two-level domain concept.

-   Data elements can be edited in form-based editors both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[Technical Attributes of Data Elements](javascript:call_link\('abenddic_data_elements_tech.htm'\))
[Semantic Attributes of Data Elements](javascript:call_link\('abenddic_data_elements_sema.htm'\))
[Domains](javascript:call_link\('abenddic_domains.htm'\))



**📖 Source**: [abenddic_data_elements.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements.htm)

### abenddic_data_elements_tech.htm

> **📖 Official SAP Documentation**: [abenddic_data_elements_tech.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements_tech.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

Technical Attributes of Data Elements

A data element describes an [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") with the following technical attributes:

-   Elementary type

A data element that describes an elementary type has a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) from ABAP Dictionary, a length, and an (optional) number of fractional digits as its technical attributes. These technical attributes are defined either directly in the data element or are applied from a [domain](javascript:call_link\('abenddic_domains.htm'\)).

-   Reference type

A data element that describes a reference type is either a type for a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") or for an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry").

-   The [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") for a data reference variable is either the generic type DATA, any data type from ABAP Dictionary (including [database tables](javascript:call_link\('abenddic_database_tables.htm'\)) or [views](javascript:call_link\('abenddic_views.htm'\))), or a directly specified [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)).

-   The [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") for an object reference variable is either the generic type OBJECT or a global class or global interface from the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry").

Notes

-   When existing data elements are modified, all consumers of the data element are also affected. In particular, [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) can become inconsistent when used for fields of database tables, which makes [conversions](javascript:call_link\('abenddic_database_tables_conv.htm'\)) necessary.

-   Global reference types in ABAP Dictionary can be used to specify types in ABAP programs. They cannot, however, be used for fields of database tables or in CDS views.

Example

The data element S\_CONN\_ID takes its technical attributes (data type NUMC, length 4) from the domain S\_CONN\_ID. The data element S\_CONN\_ID has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic attributes, such as the column CONNID of the database tables SPFLI, SBOOK, and SFLIGHT.



**📖 Source**: [abenddic_data_elements_tech.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements_tech.htm)

### abenddic_data_elements_sema.htm

> **📖 Official SAP Documentation**: [abenddic_data_elements_sema.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements_sema.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

Semantic Attributes of Data Elements

The semantic attributes of data elements are mainly significant when they are used as types of fields on user interfaces such as [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") (or [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry")) fields . The only exceptions to this are the default component name and the flag for the change document. ABAP data objects declared with reference to a data element ignore the semantic attributes of the element.

-   Short text

Short text of the data element. The short text assigned to a data element appears as a header in a [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element.

-   Field label

The short, medium, and long field labels assigned to a data element, plus a header, can be created where appropriate as descriptions or column headers of lists for fields on screens of dynpros or Web Dynpros with direct or indirect reference to the data element. A freely definable maximum length with varying upper limits for the different field labels is applied to all languages and must be set accordingly.

-   Documentation

Documentation of the data element. The documentation created for a data element appears by default as [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") for all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element. If no documentation was created, only the short text appears.

-   Supplement documentation

Additional supplement documentation objects can be created for a data element, with each documentation object identified by a four-digit number. This supplement documentation can be used for program-specific and dynpro-specific [field helps](javascript:call_link\('abendynp_field_help.htm'\)). The assignment of supplement documentation to a dynpro field is saved in the database table THLPF.

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

A data element with an elementary data type can be assigned a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") and a parameter can be passed to this search help.
This search help is used for the [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element, unless the dynpro field is itself associated with a search help. Search helps cannot be assigned to a data element with a reference type.

-   SPA/GPA parameter

A data element with an elementary data type can be associated with an [SPA/GPA parameter](javascript:call_link\('abenmemory.htm'\)).
Dynpro fields defined with direct or indirect reference to the data element are filled with the content of the parameter, unless the dynpro field is itself associated with an SPA/GPA parameter. A data element with a reference type cannot be associated with an SPA/GPA parameter.

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

The flag for change documents specifies whether changes to fields in database tables defined with reference to this data element are logged when change document objects are involved. A change document object groups multiple tables and is used to generate function modules that can be integrated into ABAP programs and that log changes. This flag cannot be set for data elements with a reference type.

-   Further semantic attributes can be defined in the [domain](javascript:call_link\('abenddic_domains.htm'\)) referenced by a data element.

The texts in the semantic attributes (the short text, field labels, and documentation) are, like all AS ABAP texts, passed to the translation tools.

Note

It is highly significant that many semantic attributes of a data element define the behavior of dynpro fields or Web Dynpro fields. For example, a data element whose documentation describes the internal attributes of a technical type is not usually suitable for use in UI fields. One example are the data elements SYST\_... that define the components of the system structure SYST. The documentation of these data elements describes the corresponding system fields and must not appear on a UI. Ideally, separate data elements are created with their own semantic attributes for UIs and database tables. Any data elements not used for UI fields do not usually need semantic attributes (except for the short text and possibly documentation). Conversely, attributes such as the flag for change documents are not relevant for data elements for UIs.



**📖 Source**: [abenddic_data_elements_sema.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_data_elements_sema.htm)

### abenddic_domains.htm

> **📖 Official SAP Documentation**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](javascript:call_link\('abenddic_domains_tech.htm'\))

-   [Semantic attributes of domains](javascript:call_link\('abenddic_domains_sema.htm'\))

Notes

-   Domains are located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as special literals in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be edited in form-based editors both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[Technical Attributes of Domains](javascript:call_link\('abenddic_domains_tech.htm'\))
[Semantic Attributes of Domains](javascript:call_link\('abenddic_domains_sema.htm'\))



**📖 Source**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm)

### abenddic_domains_tech.htm

> **📖 Official SAP Documentation**: [abenddic_domains_tech.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains_tech.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose following technical attributes are defined directly in the domain:

-   [Built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary

-   Length

-   A number of decimal places (optional)

Note

When existing domains are modified, all consumers of the domain are also affected. In particular, [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) can become inconsistent when used for the fields of database tables, which makes [conversions](javascript:call_link\('abenddic_database_tables_conv.htm'\)) necessary.



**📖 Source**: [abenddic_domains_tech.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains_tech.htm)

### abenddic_domains_sema.htm

> **📖 Official SAP Documentation**: [abenddic_domains_sema.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains_sema.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

Semantic Attributes of Domains

Domains can be given the following semantic attributes:

-   Short text

Each domain has a short description specified when it is created.

-   Documentation

A domain can be given (optional) documentation.

-   Output attributes

The output attributes determine how fields defined with reference to a data element (that itself references the domain) are displayed on [dynpros or Web Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") or when formatted with the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)). .

-   Output length
    The (optional) output length overrides the [implicit output length](javascript:call_link\('abenwrite_output_length.htm'\)) as assigned to the built-in elementary data types. The potential output length is determined by the data type and is checked by ABAP Dictionary [tools](javascript:call_link\('abenddic_tools.htm'\)). If a format is assigned to the built-in data type in question, the output length should be long enough for all formatting characters.

-   Output style
    A domain with the type of a decimal floating point number must be assigned an [output style](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).

-   Conversion routine
    If a domain is assigned to a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry"), the associated function module ...\_INPUT (for each input in a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") defined with reference to a data element that itself references the domain) is called. Similarly, the associated function module ...\_OUTPUT (for each output using a dynpro field defined with reference to a data element that itself references the domain) is also called. The function module ...\_OUTPUT is executed in the same way when a data object is formatted using [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) when the data object is declared with reference to a data element of this type.
    

-   Sign
    If a data type of a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary is numeric, the "Sign" attribute must be set so that negative numbers can be displayed on the screen. This attribute can only be specified using a domain.

-   Lowercase letters
    If a data type of a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary is character-like, the "Lowercase Letters" attribute can be set so that these letters are not transformed to uppercase. This attribute can only be specified using a domain.

-   Time format
    For the data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), a 24-hour or 12-hour format can be set for displaying dynpro fields in accordance with the ABAP [time formats](javascript:call_link\('abentime_formats.htm'\)).

-   Value range

Value ranges for fields on user interfaces can be defined for domains of the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, NUMC, DEC, INT1, INT2, INT4, and INT8. For domains of the types CHAR and NUMC, this range specifies the valid input values in dynpro fields defined with reference to a data element of the domain in question. The value range is evaluated for all types for the [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") of [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of database table fields that reference a data element with a domain of this type. A value range can be defined using the following:

-   Fixed values

-   Intervals

Fixed values and intervals can be combined here as required. The following can be specified as fixed values and interval boundaries:

-   Alphanumeric characters including blanks and special characters for the type CHAR. The length is restricted to 10.

-   Positive integers (including 0) for the types NUMC, INT1, INT2, INT4, INT8, and DEC within the [value range](javascript:call_link\('abenddic_builtin_types.htm'\)) defined by the technical attributes.

A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special [literals](javascript:call_link\('abencds_f1_literal.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The fixed values provided by SAP can be enhanced by customers or partners using [fixed value appends](javascript:call_link\('abenddic_fixed_value_appends.htm'\)).

-   Value table

A value table can be a database table that is used as a default for the [check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) in cases where a table field of a database table that references a data element with this domain is included in a [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)). Just specifying a value table does not trigger a check.

Example

The domain S\_CLASS with the type CHAR describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values "C" (Business Class), "F“ (First Class), and "Y“ (Economy Class). This means that only the values "C", "F", and "Y" can be entered for all dynpro fields that point to this domain.



**📖 Source**: [abenddic_domains_sema.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains_sema.htm)

### abenddic_domains.htm

> **📖 Official SAP Documentation**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_domains.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](javascript:call_link\('abenddic_domains_tech.htm'\))

-   [Semantic attributes of domains](javascript:call_link\('abenddic_domains_sema.htm'\))

Notes

-   Domains are located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as special literals in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be edited in form-based editors both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[Technical Attributes of Domains](javascript:call_link\('abenddic_domains_tech.htm'\))
[Semantic Attributes of Domains](javascript:call_link\('abenddic_domains_sema.htm'\))
