# ABAP TYPES - Complete Reference (7.55)

**Generated**: 2025-09-01T11:14:57.945Z
**Bundles Combined**: 10
**Category**: types

---



## 🔗 Complete Source Documentation

**📖 Official Documentation**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)
**🏷️ Category**: TYPES
**🔍 Search Specific Topics**: Use `abap_search query:"types"` for focused results
**📄 Individual Pages**: All source URLs included in each section below

### 🎯 Quick Navigation
- **Search for specific statements**: `abap_search query:"SELECT"` or `abap_search query:"LOOP"`
- **Get individual bundles**: Use `abap_get` with specific bundle doc_id
- **Browse by difficulty**: Look for **Difficulty** markers in each section

---

## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Data Elements

**Files**: 7 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Data Elements

Included pages: 7


### abenddic_data_elements.htm

> **📖 Official SAP Documentation**: [abenddic_data_elements.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) → 

DDIC - Data Elements

A data element in ABAP Dictionary defines an [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") and describes, alongside the technical type attributes, the semantic meaning of an object defined with reference to the data element. Data elements are the elementary parts of complex types such as [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), [DDIC table types](javascript:call_link\('abenddic_table_types.htm'\)), or [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)). An internal program object declared with reference to a data element always has one of the elementary built-in ABAP types. The type in question is defined by the mapping of the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary to ABAP types.

-   [Technical attributes of data elements](javascript:call_link\('abenddic_data_elements_tech.htm'\))

-   [Semantic attributes of data elements](javascript:call_link\('abenddic_data_elements_sema.htm'\))

Hints

-   The technical attributes of a data element can be defined either directly or by using a reusable [domain](javascript:call_link\('abenddic_domains.htm'\)). This is why the concept is known as a two-level domain concept.

-   Data elements can be maintained in form-based tools both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   The name of a data element must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)).

Continue
[DDIC - Technical Attributes of Data Elements](javascript:call_link\('abenddic_data_elements_tech.htm'\))
[DDIC - Semantic Attributes of Data Elements](javascript:call_link\('abenddic_data_elements_sema.htm'\))
[DDIC - Domains](javascript:call_link\('abenddic_domains.htm'\))



**📖 Source**: [abenddic_data_elements.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements.htm)

### abenddic_data_elements_tech.htm

> **📖 Official SAP Documentation**: [abenddic_data_elements_tech.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_tech.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

DDIC - Technical Attributes of Data Elements

A data element describes an [elementary data type](javascript:call_link\('abenelementary_data_type_glosry.htm'\) "Glossary Entry") or a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry") with the following technical attributes:

-   Elementary type

A data element that describes an elementary type has a [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) from ABAP Dictionary, a length, and an (optional) number of fractional digits as its technical attributes. These technical attributes are defined either directly in the data element or are applied from a [domain](javascript:call_link\('abenddic_domains.htm'\)).

-   Reference type

A data element that describes a reference type is either a type for a [data reference variable](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry") or for an [object reference variable](javascript:call_link\('abenobject_refer_variable_glosry.htm'\) "Glossary Entry").

-   The [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") for a data reference variable is either the generic type DATA, any data type from ABAP Dictionary (including [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) or [views](javascript:call_link\('abenddic_views.htm'\))), or a directly specified [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)).

-   The [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") for an object reference variable is either the generic type OBJECT or a global class or global interface from the [class library](javascript:call_link\('abenclass_library_glosry.htm'\) "Glossary Entry").

Hints

-   When existing data elements are modified, all consumers of the data element are also affected. In particular, [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) can become inconsistent when used for fields of DDIC database tables, which makes [adjustments](javascript:call_link\('abenddic_database_tables_adj.htm'\)) necessary.

-   Global reference types in ABAP Dictionary can be used to specify types in ABAP programs. They cannot, however, be used for fields of database tables or in CDS entities.

Example

The data element S\_CONN\_ID takes its technical attributes (data type NUMC, length 4) from the domain S\_CONN\_ID. The data element S\_CONN\_ID has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic attributes, such as the column CONNID of the DDIC database tables SPFLI, SBOOK, and SFLIGHT.



**📖 Source**: [abenddic_data_elements_tech.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_tech.htm)

### abenddic_data_elements_sema.htm

> **📖 Official SAP Documentation**: [abenddic_data_elements_sema.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_sema.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

DDIC - Semantic Attributes of Data Elements

The semantic attributes of data elements are mainly significant when they are used as types of fields on user interfaces such as [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") (or [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry")) fields . The only exceptions to this are the default component name and the flag for the change document. ABAP data objects declared with reference to a data element ignore the semantic attributes of the element.

-   Short text

Short text of the data element. The short text assigned to a data element appears as a header in a [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element.

-   Field label

The short, medium, and long field labels assigned to a data element, plus a header, can be created where appropriate as descriptions or column headers of lists for fields on screens of dynpros or Web Dynpros with direct or indirect reference to the data element. A freely definable maximum length with varying upper limits for the different field labels is applied to all languages and must be set accordingly.

-   Documentation

Documentation of the data element. The documentation created for a data element appears by default as [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") for all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element. If no documentation was created, only the short text appears.

-   Supplement documentation

Additional supplement documentation objects can be created for a data element, with each documentation object identified by a four-digit number. This supplement documentation can be used for program-specific and dynpro-specific [field helps](javascript:call_link\('abendynp_field_help.htm'\)). The assignment of supplement documentation to a dynpro field is saved in the DDIC database table THLPF.

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

A data element with an elementary data type can be associated with an [SPA/GPA parameter](javascript:call_link\('abenspa_gpa.htm'\)).
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

-   Further semantic attributes can be defined in the [domain](javascript:call_link\('abenddic_domains.htm'\)) referenced by a data element.

The texts in the semantic attributes (the short text, field labels, and documentation) are, like all AS ABAP texts, passed to the translation tools.

Hint

It is highly significant that many semantic attributes of a data element define the behavior of dynpro fields or Web Dynpro fields. For example, a data element whose documentation describes the internal attributes of a technical type is not usually suitable for use in UI fields. One example are the data elements SYST\_... that define the components of the system structure SYST. The documentation of these data elements describes the corresponding system fields and must not appear on a UI. Ideally, separate data elements are created with their own semantic attributes for UIs and DDIC database tables. Any data elements not used for UI fields do not usually need semantic attributes (except for the short text and possibly documentation). Conversely, attributes such as the flag for change documents are not relevant for data elements for UIs.



**📖 Source**: [abenddic_data_elements_sema.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_data_elements_sema.htm)

### abenddic_domains.htm

> **📖 Official SAP Documentation**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

DDIC - Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](javascript:call_link\('abenddic_domains_tech.htm'\))

-   [Semantic attributes of domains](javascript:call_link\('abenddic_domains_sema.htm'\))

The name of a domain must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as special literals in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[DDIC - Technical Attributes of Domains](javascript:call_link\('abenddic_domains_tech.htm'\))
[DDIC - Semantic Attributes of Domains](javascript:call_link\('abenddic_domains_sema.htm'\))



**📖 Source**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm)

### abenddic_domains_tech.htm

> **📖 Official SAP Documentation**: [abenddic_domains_tech.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [DDIC - Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

DDIC - Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose following technical attributes are defined directly in the domain:

-   [Built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary

-   Length

-   A number of fractional digits (optional)

Hint

When existing domains are modified, all consumers of the domain are also affected. In particular, [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) can become inconsistent when used for the fields of DDIC database tables, which makes [adjustments](javascript:call_link\('abenddic_database_tables_adj.htm'\)) necessary.



**📖 Source**: [abenddic_domains_tech.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_tech.htm)

### abenddic_domains_sema.htm

> **📖 Official SAP Documentation**: [abenddic_domains_sema.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [DDIC - Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

DDIC - Semantic Attributes of Domains

Domains can be given the following semantic attributes:

-   Short text

Each domain has a short description specified when it is created.

-   Documentation

A domain can be given (optional) documentation.

-   Output attributes

The output attributes determine how fields defined with reference to a data element that references the domain are displayed on [dynpros or Web Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") or when formatted with the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)).

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
    

Value ranges for fields on user interfaces can be defined for domains of the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, NUMC, DEC, INT1, INT2, INT4, and INT8. For domains of the types CHAR and NUMC, this range specifies the valid input values in dynpro fields defined with reference to a data element of the domain in question. The value range is evaluated for all types for the [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") of [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of DDIC database table fields that reference a data element with a domain of this type. A value range can be defined using the following:

-   Fixed values

-   Intervals

Fixed values and intervals can be combined here as required. The following can be specified as fixed values and interval boundaries:

-   Alphanumeric characters including blanks and special characters for the type CHAR. The length is restricted to 10.

-   Positive integers (including 0) for the types NUMC, INT1, INT2, INT4, INT8, and DEC within the [value range](javascript:call_link\('abenddic_builtin_types.htm'\)) defined by the technical attributes.

A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special [literals](javascript:call_link\('abencds_literal_v1.htm'\)) in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The fixed values provided by SAP can be enhanced by customers or partners using [fixed value appends](javascript:call_link\('abenddic_fixed_value_appends.htm'\)).

-   Value table

A value table can be a DDIC database table that is used as a default for the [check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) in cases where a table field of a DDIC database table that references a data element with this domain is included in a [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)). Just specifying a value table does not trigger a check.

Example

The domain S\_CLASS with the type CHAR describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values "C" (Business Class), "F" (First Class), and "Y" (Economy Class). This means that only the values "C", "F", and "Y" can be entered for all dynpro fields that point to this domain.



**📖 Source**: [abenddic_domains_sema.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains_sema.htm)

### abenddic_domains.htm

> **📖 Official SAP Documentation**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

DDIC - Domains

A domain is a standalone dictionary object that defines technical and semantic attributes of elementary data types. [Data elements](javascript:call_link\('abenddic_data_elements.htm'\)) can be defined with reference to a domain and inherit its attributes. Domains can only be used in data elements. A domain can be used by any number of data elements.

-   [Technical attributes of domains](javascript:call_link\('abenddic_domains_tech.htm'\))

-   [Semantic attributes of domains](javascript:call_link\('abenddic_domains_sema.htm'\))

The name of a domain must follow the [naming rules for DDIC data types](javascript:call_link\('abenddic_types_names.htm'\)) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains within an application component or a package should be avoided. Domains that only have technical attributes must be created as reusable domains in central basis packages. One example is the domain CHAR255.

-   The [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a domain can be used as special literals in [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as well as the full domain being used in data elements.

-   A domain describes the attributes of an elementary data type but is not a data type itself. More specifically, a domain cannot be specified after a TYPE addition in ABAP.

-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) and in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Continue
[DDIC - Technical Attributes of Domains](javascript:call_link\('abenddic_domains_tech.htm'\))
[DDIC - Semantic Attributes of Domains](javascript:call_link\('abenddic_domains_sema.htm'\))


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Technical Attributes of Structures

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Technical Attributes of Structures

Included pages: 2



**📖 Source**: [abenddic_domains.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_domains.htm)

### abenddic_structures_tech.htm

> **📖 Official SAP Documentation**: [abenddic_structures_tech.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_tech.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

DDIC - Technical Attributes of Structures

A DDIC structure describes a [structure type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") constructed from components and with the following technical attributes:

-   Component name

The name of a component can have a maximum of 30 characters, can contain only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry"). The following restrictions apply:

-   A component name cannot be the name of the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line reserved in ABAP.

-   If a structure is inserted in a [database table](javascript:call_link\('abenddic_database_tables.htm'\)), however, the component names cannot have any of the reserved names that are not allowed in DDIC database tables.

-   Component type

-   For elementary components, the technical attributes ( [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)), length, and any fractional digits) are defined with reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) for an elementary type in ABAP Dictionary or directly in the structure component. In the case of [currency fields](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") and [quantity fields,](javascript:call_link\('abenquantity_glosry.htm'\) "Glossary Entry") a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) must be specified for the unit.

-   For reference-like components, the technical attributes are defined using a reference to a [data element](javascript:call_link\('abenddic_data_elements.htm'\)) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any DDIC data type or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,

-   Substructures are defined by reference to [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)), [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)), or [DDIC views](javascript:call_link\('abenddic_views.htm'\)). A substructure can be defined as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry"). In ABAP data objects declared with reference to the DDIC structure, static box supports [initial value sharing](javascript:call_link\('abeninitial_value_sharing_glosry.htm'\) "Glossary Entry").

-   Tabular components are defined by reference to a [DDIC table type](javascript:call_link\('abenddic_table_types.htm'\)).

-   Enhancement category

The [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) of a structure specifies how a structure can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") and specifies how ABAP programs that work with data objects of this structure type are checked.

-   Activation type

An [activation type](javascript:call_link\('abenddic_database_tables_act_type.htm'\)) can be defined for a structure, like for DDIC database tables, but has no specific use here.

Hints

-   In ABAP, the component names of structures are not strictly speaking a [technical type attribute](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry"). They are listed here however to simplify the picture.

-   The above rules for component names are checked strictly by ABAP Dictionary only for table fields of DDIC database tables and not for structures. Component names of structures can contain special characters (such as :) that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.

-   A substructure cannot be defined using a reference to a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), but it can be defined using a reference to a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a corresponding [CDS view](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

Continue
[DDIC - Enhancement Category of Structures](javascript:call_link\('abenddic_structures_enh_cat.htm'\))



**📖 Source**: [abenddic_structures_tech.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_tech.htm)

### abenddic_structures_enh_cat.htm

> **📖 Official SAP Documentation**: [abenddic_structures_enh_cat.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_enh_cat.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Technical Attributes of Structures](javascript:call_link\('abenddic_structures_tech.htm'\)) → 

DDIC - Enhancement Category of Structures

ABAP Dictionary structures and DDIC database tables that are delivered by SAP can be enhanced using [customizing includes](javascript:call_link\('abencustomizing_include_glosry.htm'\) "Glossary Entry") or [append structures](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry"). These types of changes cause problems if the enhancements change the [structure fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry").

For this reason, structures and DDIC database tables are given a classification, which make it possible to recognize and handle problems related to structure enhancements. This classification is used in the program check to create a warning at all points where the program works with structures, and where later structure enhancements could cause syntax errors or changes in program behavior. When a structure or a DDIC database table is defined in ABAP Dictionary, the enhancement categories shown in the following table can be used as a classification.

Level

Category

Meaning

1

Unclassified

The structure does not have an enhancement category.

2

Cannot be enhanced

The structure must not be enhanced.

3

Can be enhanced and character-like

All structure components and their enhancements must be character-like and flat.

4

Can be enhanced and character-like or numeric

All structure components and their enhancements must be flat.

5

Can be enhanced in any way

All structure components and their enhancements can have any data type.

The warnings shown after the program check are classified into three levels from the following table, depending on the consequences of the allowed structure enhancements.

Level

Type of Check

Meaning

A

Syntax check

An enhancement that exhausts in full the enhancement category of the structure in question produces a syntax error.

B

Extended check

Permitted enhancements can produce syntax errors, but not always.

C

Extended check

Permitted enhancements cannot produce syntax errors, although changes to program behavior do cause semantic problems.

Example

If the structure ddic\_struc in ABAP Dictionary is defined only with [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") components but is classified as Can be enhanced in any way, the following program section produces a warning in the syntax check. If the structure were to be enhanced by a [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") component after the program was delivered, the program would have incorrect syntax and would no longer be executable. In this case, this is why either the structure ddic\_struc must be classified in ABAP Dictionary as Can be enhanced and character-like or else the offset/length cannot be specified in the program.

DATA: my\_struc TYPE ddic\_struc,
      str TYPE string,
      off  TYPE i,
      len TYPE i.
...
str = my\_struc+off(len).


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Dictionary DDL for Structure Definitions

**Files**: 11 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Dictionary DDL for Structure Definitions

Included pages: 11



**📖 Source**: [abenddic_structures_enh_cat.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structures_enh_cat.htm)

### abenddic_define_structure.htm

> **📖 Official SAP Documentation**: [abenddic_define_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_structure.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) → 

DDIC - Dictionary DDL for Structure Definitions

In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a structure can be displayed and modified using source-code-based methods in the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, the source code of a structure is not saved and transported. Instead, the source code of an existing structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\))

Hint

All properties of a structure described in the preceding sections can be defined using DEFINE STRUCTURE or in transaction SE11.

Continue
[DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\))



**📖 Source**: [abenddic_define_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_structure.htm)

### abenddicddl_define_structure.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_structure.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
DEFINE STRUCTURE struct {
  ...
  [component;](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
  ...
  [include;](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) struct in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   A structure is defined using the statement DEFINE STRUCTURE. The usual restrictions for ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) apply to the name struct.

-   The mandatory structure properties must be specified as annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) in front of the statement DEFINE STRUCTURE.

-   The structure components are defined in a semicolon-separated list in curly brackets { } by one of the following methods:

-   Defining individual components [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))

-   Including include structures [include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))

Hints

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the structure DEMOFLI in the ADT.

@EndUserText.label : 'Structure for ALV Demo'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demofli {
  fldate   : s\_date;
  seatsmax : s\_seatsmax;
  seatsocc : s\_seatsocc; }

Continue
[DDIC DDL - DEFINE STRUCTURE, structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
[DDIC DDL - DEFINE STRUCTURE, component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
[DDIC DDL - DEFINE STRUCTURE, include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))



**📖 Source**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_structure.htm)

### abenddicddl_define_struct_props.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_props.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_props.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, structure\_annos

Syntax

@EndUserText.label : '...'
@AbapCatalog.enhancementCategory : enh\_cat

Effect

Mandatory annotations for specifying structure properties in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the structure](javascript:call_link\('abenddic_structures_sema.htm'\)) in its original language.

-   @AbapCatalog.enhancementCategory defines the [enhancement category of the structure](javascript:call_link\('abenddic_structures_enh_cat.htm'\)). The following can be specified for enh\_cat:

-   #NOT\_CLASSIFIED - [Not classified](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #NOT\_EXTENSIBLE - [Cannot be enhanced (extended)](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_CHARACTER - [Can be enhanced (extended) and is character-like](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_CHARACTER\_NUMERIC - [Can be enhanced (extended) and is character-like or numeric](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

-   #EXTENSIBLE\_ANY - [Can be enhanced (extended) in any way](javascript:call_link\('abenddic_structures_enh_cat.htm'\))

Hints

-   The entry #NOT\_CLASSIFIED is only intended for displaying existing structures of this property. Any new or modified structures should always have an enhancement category.

-   The same annotations must also be specified in the definition of a DDIC database table using [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) and an append structure using [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\)).

-   The syntax used to specify the properties is based on [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). There are, however, no visible associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").



**📖 Source**: [abenddicddl_define_struct_props.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_props.htm)

### abenddicddl_define_struct_comps.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_comps.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, component

Syntax

*\[*component\_annos*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*[geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\))*\]*
*\[*KEY*\]* comp : *{* *{*data\_element *\[* [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]*
                             *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]**}*
               *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]* *}*
           *|* *{* REFERENCE TO any\_type *}*
           *|* *{* struct *\[*BOXED*\]* *}*
           *|* *{* table\_type *}*
           *\[*NOT NULL*\]*;

Effect

Defines a single [component](javascript:call_link\('abenddic_structures_tech.htm'\)) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Optional component properties can be specified using annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) before the component itself is specified.

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).

-   [geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\)) is used to specify special properties of a component with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") GEOM\_EWKB.

-   comp indicates the name of the component.

-   data\_element or abap.type is used to define an elementary component or a component with a reference type:

-   data\_element can be used to specify an existing [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry"). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.

-   abap.type*\[*(n)*|*(n,m)*\]* can be used to specify a built-in data type from ABAP Dictionary and an elementary component of this type is defined. When specified after the mandatory prefix abap, [type](javascript:call_link\('abenddic_builtin_types.htm'\)) indicates the type. n and m must be used to specify the length and number of decimal places, as specified by the type.

-   REFERENCE TO any\_type is used to define a reference type. For any\_type, the syntax abap.type*\[*(n)*|*(n,m)*\]* can be used to specify any existing data types from ABAP Dictionary, classes or interfaces from the class library, the generic types DATA or OBJECT, or built-in types.

-   struct *\[*BOXED*\]* is used to define a substructure. Structures, DDIC database tables, or DDIC views from ABAP Dictionary can all be specified for struct. BOXED can be used to define the substructure as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry").

-   table\_type is used to define a tabular component. [Table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") from ABAP Dictionary can be specified for table\_type.

-   The additions KEY and NOT NULL can be used to define the component as a [key field](javascript:call_link\('abenddic_structures_sema.htm'\)) and to set a [flag for initial values](javascript:call_link\('abenddic_structures_sema.htm'\)). The addition KEY has no effect, when the structure is included in DDIC database tables. It must be used for structure components that are used as lock parameters of lock objects. The addition NOT NULL can be taken into account for structures that are included in DDIC database tables.

-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.

-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") for a structure component whose data type is defined using a data element with elementary data type. This addition does only make sense for structures that are included in DDIC database tables.

Hint

The [activation type](javascript:call_link\('abenddic_structures_tech.htm'\)) (relevant only for DDIC database tables) cannot be modified using DEFINE STRUCTURE.

Example

Defines elementary components of the structure DEMO\_DAY with reference to built-in dictionary types. In the example for [include structures](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)), the structure is included more than once in another structure.

@EndUserText.label : 'Demo for include structure'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demo\_day {
  work : abap.char(8);
  free : abap.char(16); }

Continue
[DDIC DDL - DEFINE STRUCTURE, component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\))
[DDIC DDL - DEFINE STRUCTURE, value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))



**📖 Source**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_comps.htm)

### abenddicddl_define_struct_cmpprps.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_cmpprps.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_cmpprps.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE, component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, component\_annos

Syntax

*\[*@EndUserText.label : '...'*\]*
*\[*@AbapCatalog.decfloat.outputStyle : style *\]*
*\[*@Semantics.amount.currencyCode : 'struct.comp'*\]*
*\[*@Semantics.quantity.unitOfMeasure : 'struct.comp'*\]*

Effect

Applies annotations to specify optional properties of a [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the component](javascript:call_link\('abenddic_structures_sema.htm'\)) in the original language of the structure.

-   @AbapCatalog.decfloat.outputStyle defines the [output style](javascript:call_link\('abenddic_decimal_floating_point.htm'\)) of a decimal floating point number. style can be specified as:

-   #NORMAL - default, mathematical or scientific depending on space

-   #SIGN\_RIGHT

-   #SCALE\_PRESERVING

-   #SCIENTIFIC

-   #SCIENTIFIC\_WITH\_LEADING\_ZERO

-   #SCALE\_PRESERVING\_SCIENTIFIC

-   #ENGINEERING

-   @Semantics.amount.currencyCode - Definition of a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) for a [currency field](javascript:call_link\('abenddic_currency_field.htm'\)). A component comp with the built-in dictionary type CUKY from the same or from a different structure struc must be specified in quotation marks.

-   @Semantics.quantity.unitOfMeasure - Definition of a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) for a [quantity field](javascript:call_link\('abenddic_quantity_field.htm'\)). A component comp with the built-in dictionary type UNIT from the same or from a different structure struc must be specified in quotation marks.

Hint

The syntax used to specify the properties is based on [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry"). There are, however, no visible associated [annotation definitions](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry").

Example

Defines the component weight\_unit as a reference field for the quantity field weight in the same structure.

...
define structure struct {
  ...
  @Semantics.quantity.unitOfMeasure : 'struct.weight\_unit'
  weight :      abap.quan(2);
  weight\_unit : abap.unit(2);
  ...
  }



**📖 Source**: [abenddicddl_define_struct_cmpprps.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_cmpprps.htm)

### abenddicddl_define_struct_valuhelp.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_valuhelp.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_valuhelp.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE, component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, value\_help

Syntax

...  WITH VALUE HELP value\_help
       WHERE parameter1 = structure.component1
         *\[*AND parameter2 = structure.component2 ...*\]* ...

Effect

Assigns a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") to a [structure component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) whose data type is defined by a data element with an elementary data type in the definition of a structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, value\_help is an existing search help in ABAP Dictionary. All parameters of the search help must be associated with structure components after WHERE.

Hint

The addition WITH VALUE HELP can be used, with the same meaning, in the definition of a database using [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)).

Example

Defines elementary components with reference to data elements and binds a search help to the second component.

...
define structure struct {
  comp1 : s\_carr\_id;
  comp2 : s\_conn\_id
    with value help demo\_f4\_field
      where carrid = struct.comp1
        and connid = struct.comp2;
  ...
  }



**📖 Source**: [abenddicddl_define_struct_valuhelp.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_valuhelp.htm)

### abenddicddl_define_struct_comps.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_comps.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, component

Syntax

*\[*component\_annos*\]*
*\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
*\[*[geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\))*\]*
*\[*KEY*\]* comp : *{* *{*data\_element *\[* [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]*
                             *\[*[foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\))*\]**}*
               *|*abap. [type](javascript:call_link\('abenddic_builtin_types.htm'\))*\[*(n)*|*(n,m)*\]* *}*
           *|* *{* REFERENCE TO any\_type *}*
           *|* *{* struct *\[*BOXED*\]* *}*
           *|* *{* table\_type *}*
           *\[*NOT NULL*\]*;

Effect

Defines a single [component](javascript:call_link\('abenddic_structures_tech.htm'\)) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Optional component properties can be specified using annotations [component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\)) before the component itself is specified.

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)).

-   [geo\_annos](javascript:call_link\('abenddicddl_define_table_srprps.htm'\)) is used to specify special properties of a component with the [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") GEOM\_EWKB.

-   comp indicates the name of the component.

-   data\_element or abap.type is used to define an elementary component or a component with a reference type:

-   data\_element can be used to specify an existing [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry"). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.

-   abap.type*\[*(n)*|*(n,m)*\]* can be used to specify a built-in data type from ABAP Dictionary and an elementary component of this type is defined. When specified after the mandatory prefix abap, [type](javascript:call_link\('abenddic_builtin_types.htm'\)) indicates the type. n and m must be used to specify the length and number of decimal places, as specified by the type.

-   REFERENCE TO any\_type is used to define a reference type. For any\_type, the syntax abap.type*\[*(n)*|*(n,m)*\]* can be used to specify any existing data types from ABAP Dictionary, classes or interfaces from the class library, the generic types DATA or OBJECT, or built-in types.

-   struct *\[*BOXED*\]* is used to define a substructure. Structures, DDIC database tables, or DDIC views from ABAP Dictionary can all be specified for struct. BOXED can be used to define the substructure as a [static box](javascript:call_link\('abenstatic_box_glosry.htm'\) "Glossary Entry").

-   table\_type is used to define a tabular component. [Table types](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") from ABAP Dictionary can be specified for table\_type.

-   The additions KEY and NOT NULL can be used to define the component as a [key field](javascript:call_link\('abenddic_structures_sema.htm'\)) and to set a [flag for initial values](javascript:call_link\('abenddic_structures_sema.htm'\)). The addition KEY has no effect, when the structure is included in DDIC database tables. It must be used for structure components that are used as lock parameters of lock objects. The addition NOT NULL can be taken into account for structures that are included in DDIC database tables.

-   The addition [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.

-   The addition [foreign\_key](javascript:call_link\('abenddicddl_define_table_forkey.htm'\)) can be used to define a [foreign key dependency](javascript:call_link\('abenforeign_key_dependency_glosry.htm'\) "Glossary Entry") for a structure component whose data type is defined using a data element with elementary data type. This addition does only make sense for structures that are included in DDIC database tables.

Hint

The [activation type](javascript:call_link\('abenddic_structures_tech.htm'\)) (relevant only for DDIC database tables) cannot be modified using DEFINE STRUCTURE.

Example

Defines elementary components of the structure DEMO\_DAY with reference to built-in dictionary types. In the example for [include structures](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)), the structure is included more than once in another structure.

@EndUserText.label : 'Demo for include structure'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demo\_day {
  work : abap.char(8);
  free : abap.char(16); }

Continue
[DDIC DDL - DEFINE STRUCTURE, component\_annos](javascript:call_link\('abenddicddl_define_struct_cmpprps.htm'\))
[DDIC DDL - DEFINE STRUCTURE, value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))



**📖 Source**: [abenddicddl_define_struct_comps.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_comps.htm)

### abenddicddl_define_struct_incl.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_incl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
                   ...*\]*;

Effect

Includes an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the definition of a structure with the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Any existing DDIC structure, including DDIC database tables or views, can be specified as struct.

-   group can be used to specify an optional name of a [group](javascript:call_link\('abenddic_include_structure.htm'\)).

-   suffix can be used to specify an optional three-character [suffix](javascript:call_link\('abenddic_include_structure.htm'\)).

-   A blank-separated list of additions, [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Hint

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) if the include structure is suitable for DDIC database tables.

Example

Syntax for defining the structure DEMO\_WEEK in the ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))



**📖 Source**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_incl.htm)

### abenddicddl_define_struct_comp_ext.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_comp_ext.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_comp_ext.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE, include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, extend

Syntax

... *\[*[foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\))*\]*
    EXTEND component : *\[*[value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\))*\]* *\[*foreign\_key*\]* ...

Effect

Defines component properties when [including](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)) include structures using the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). The addition EXTEND can be specified for the every component component in the included [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) and defines the following properties for this structure. If any of the properties of the included component already exist, they are overwritten.

-   [foreign\_key\_annos](javascript:call_link\('abenddicddl_define_table_fkprps.htm'\)) - Properties of a foreign key relationship

-   [value\_help](javascript:call_link\('abenddicddl_define_struct_valuhelp.htm'\)) - Assignment to a search help.

-   foreign\_key - Definition of a foreign key dependency.

At least one of the additions value\_help and foreign\_key must be specified.

Hint

The addition EXTEND can be used for individual components and with the same meaning in the definition of a DDIC database table with [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) or an append structure with [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\)).

Example

Includes a structure include\_struct in a structure struct, where EXTEND is used to assign a search help to the components comp1 and comp2.

...
define structure struct {
  ...
  include include\_struct
    extend comp1 :
      with value help demo\_f4\_field
        where carrid = struct.comp1
          and connid = struct.comp2
    extend comp2 :
      with value help demo\_f4\_field
        where carrid = struct.comp1
          and connid = struct.comp2;
  ...
  }



**📖 Source**: [abenddicddl_define_struct_comp_ext.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_comp_ext.htm)

### abenddicddl_define_struct_incl.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_incl.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) →  [DDIC DDL - DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE, include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
                   ...*\]*;

Effect

Includes an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)) in the definition of a structure with the statement [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)) in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry").

-   Any existing DDIC structure, including DDIC database tables or views, can be specified as struct.

-   group can be used to specify an optional name of a [group](javascript:call_link\('abenddic_include_structure.htm'\)).

-   suffix can be used to specify an optional three-character [suffix](javascript:call_link\('abenddic_include_structure.htm'\)).

-   A blank-separated list of additions, [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Hint

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](javascript:call_link\('abenddicddl_define_table.htm'\)) if the include structure is suitable for DDIC database tables.

Example

Syntax for defining the structure DEMO\_WEEK in the ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))



**📖 Source**: [abenddicddl_define_struct_incl.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_struct_incl.htm)

### abenddicddl_define_structure.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_structure.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Structures](javascript:call_link\('abenddic_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Definitions](javascript:call_link\('abenddic_define_structure.htm'\)) → 

DDIC DDL - DEFINE STRUCTURE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
DEFINE STRUCTURE struct {
  ...
  [component;](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
  ...
  [include;](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) struct in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   A structure is defined using the statement DEFINE STRUCTURE. The usual restrictions for ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) apply to the name struct.

-   The mandatory structure properties must be specified as annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) in front of the statement DEFINE STRUCTURE.

-   The structure components are defined in a semicolon-separated list in curly brackets { } by one of the following methods:

-   Defining individual components [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))

-   Including include structures [include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))

Hints

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Defines the structure DEMOFLI in the ADT.

@EndUserText.label : 'Structure for ALV Demo'
@AbapCatalog.enhancementCategory : #NOT\_EXTENSIBLE
define structure demofli {
  fldate   : s\_date;
  seatsmax : s\_seatsmax;
  seatsocc : s\_seatsocc; }

Continue
[DDIC DDL - DEFINE STRUCTURE, structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
[DDIC DDL - DEFINE STRUCTURE, component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
[DDIC DDL - DEFINE STRUCTURE, include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Dictionary Views

**Files**: 9 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Dictionary Views

Included pages: 9



**📖 Source**: [abenddicddl_define_structure.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_structure.htm)

### abenddic_views.htm

> **📖 Official SAP Documentation**: [abenddic_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Dictionary Views

A view in ABAP Dictionary is a grouping of columns in one or more DDIC database tables in accordance with an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types in the same way as structures. Views can be used like database tables in reading and sometimes partly writing ABAP SQL statements. For this reason, the ABAP Dictionary views are in the same namespace as all types of the ABAP Dictionary and by that in the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.

The name of a view must follow the [naming rules for DDIC views](javascript:call_link\('abenddic_view_names.htm'\)).

The data in a view is read from the DDIC database tables involved by the database and is not saved physically.

-   Views for a DDIC database table can be used to restrict database access to specific fields (projection) or to specific rows (selection).

-   Views for multiple DDIC database tables use joins or subqueries to join these tables and to read the required fields and rows.

The views in ABAP Dictionary are usually platform-independent. With some special exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-specific [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") in the current [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry"). This is done using the [DDL](javascript:call_link\('abenddl_glosry.htm'\) "Glossary Entry") statement CREATE VIEW with the addition AS SELECT, which formulates the corresponding SELECT statement. The definition of a view in the database can be displayed in transaction SE11 by choosing Utilities → Database Object.

ABAP Dictionary manages the following categories of views:

-   [DDIC table views](javascript:call_link\('abenddic_table_views.htm'\))

In DDIC table views the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)).

-   [DDIC external views](javascript:call_link\('abenddic_external_views.htm'\))

A DDIC external view makes an [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") known in ABAP programs and makes it usable like a DDIC table view.

When a view is accessed using the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), the SELECT statement defined in the DDL statement is executed and the result set is returned as if a SELECT were executed on a DDIC database table whose structure matches the structure defined by the view.

Hints

-   Views are usually defined in the implementation of data models in ABAP Dictionary and this is not usually the job of a regular ABAP application programmer. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.

-   When making selections using views, it is also important that suitable [indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)) are created for the basis tables in the view.

-   The [CDS views](javascript:call_link\('abencds_v1_views.htm'\)) in [ABAP Core Data Services (CDS)](javascript:call_link\('abencds.htm'\)) are added to the dictionary views and will replace them in the long term. A CDS view is defined in a (mostly) platform-independent [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry"). CDS views expand on the functions provided by the dictionary views.

Continue
[DDIC - Naming Rules for Dictionary Views](javascript:call_link\('abenddic_view_names.htm'\))
[DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\))
[DDIC - External Views](javascript:call_link\('abenddic_external_views.htm'\))



**📖 Source**: [abenddic_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_views.htm)

### abenddic_view_names.htm

> **📖 Official SAP Documentation**: [abenddic_view_names.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_view_names.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) → 

DDIC - Naming Rules for Dictionary Views

The name of a view defined in the ABAP Dictionary must comply to the following rules:

-   It can have a maximum of 16 characters.

-   It must follow the [naming rules for DDIC types](javascript:call_link\('abenddic_types_names.htm'\)),

-   It must follow the special [naming rules for DDIC structures](javascript:call_link\('abenddic_structures_names.htm'\)), with the exception, that it can always contain an underscore (\_) at the second or third position.

-   It is located in the namespace of the [data types](javascript:call_link\('abenddic_data_types.htm'\)) in ABAP Dictionary and by that the namespace of all [global types](javascript:call_link\('abenglobal_type_glosry.htm'\) "Glossary Entry") of an AS ABAP.



**📖 Source**: [abenddic_view_names.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_view_names.htm)

### abenddic_table_views.htm

> **📖 Official SAP Documentation**: [abenddic_table_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) → 

DDIC - Table Views

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

The definition of a DDIC table view consists of the following:

-   Basis tables

A list of DDIC database tables in ABAP Dictionary accessed by the view. Multiple tables are associated using joins.

-   View fields

A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](javascript:call_link\('abenddic_data_elements.htm'\)) can be assigned to a view field than used for the corresponding table field of the basis table. This can only happen if the type of the table field is defined using a data element with a [domain](javascript:call_link\('abenddic_domains.htm'\)) and if the new data element references the same domain. This makes it possible to adjust the semantic attributes of the view field to the view.

-   Key

A key of the view that consists of key fields. The tool derives the key of a view from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are thus marked as key fields. All rows determined by the view must be unique with respect to the key. If no key with this property can be identified, all fields of the view are key fields, which can be bad for performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.

-   Join conditions

Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the view is used to select the cross product of the basis tables. Each row in a table is combined with each row of the other table. Each join condition then selects the matching rows from the cross product.

-   Selection conditions

Used to restrict the read rows to specific values of view fields or other fields.

-   The possible comparison operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.

-   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") can be specified for DDIC maintenance views and DDIC help views using SYST-... or SY-....

-   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") on the database:

-   [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\))

-   [DDIC Projection views](javascript:call_link\('abenddic_projection_views.htm'\))

-   [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\))

-   [DDIC help views](javascript:call_link\('abenddic_help_views.htm'\))

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Hints

-   Projections can be implemented using both DDIC database views and with special projection views.

-   Only DDIC database tables can be specified as the basis tables of table views, and no other views.

-   In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.

-   Views whose fields are all key fields should not be written to using [UPDATE FROM](javascript:call_link\('abapupdate.htm'\)) or [MODIFY FROM](javascript:call_link\('abapmodify_dbtab.htm'\)). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.

-   As in DDIC database tables, the [client dependency](javascript:call_link\('abenclient_dependency_glosry.htm'\) "Glossary Entry") of a table view that can be accessed using ABAP SQL (a DDIC database view or projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored here.

-   The table views cannot be maintained using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   [CDS views](javascript:call_link\('abencds_v1_views.htm'\)) defined using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP Core Data Services in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") offer all the functions of table views and more. CDS views are, however, read-only, while some dictionary views can be modified.

Continue
[DDIC - Database Views](javascript:call_link\('abenddic_database_views.htm'\))
[DDIC - Projection Views](javascript:call_link\('abenddic_projection_views.htm'\))
[DDIC - Maintenance Views](javascript:call_link\('abenddic_maintenance_views.htm'\))
[DDIC - Help Views](javascript:call_link\('abenddic_help_views.htm'\))



**📖 Source**: [abenddic_table_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_views.htm)

### abenddic_database_views.htm

> **📖 Official SAP Documentation**: [abenddic_database_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

DDIC - Database Views

A DDIC database view is a general view for one or more basis tables. If there are multiple basis tables, they are joined using an inner join. A corresponding [SQL view](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") is created as a [database object](javascript:call_link\('abendb_object_glosry.htm'\) "Glossary Entry") on the database when the view is activated. The structure type defined using the view fields of the database view can be referenced in ABAP programs using TYPE. A database view can be accessed using ABAP SQL, AMDP, Native SQL, in CDS views, and also from outside AS ABAP using the programming interface of the database. The latter method is, however, [not recommended](javascript:call_link\('abendatabase_access_recomm.htm'\)).

-   [Basis Tables](#abenddic-database-views-1--------view-fields---@ITOC@@ABENDDIC_DATABASE_VIEWS_2)

-   [Join Conditions](#abenddic-database-views-3--------maintenance-status---@ITOC@@ABENDDIC_DATABASE_VIEWS_4)

-   [Table Buffering](#abenddic-database-views-5---hints------a-ddic-database-view-can-be-activated-in-abap-dictionary-without-its-basis-tables-being-defined-on-the-database--the-view-is-also-not-created-on-the-database-in-this-case-------as-in-a--ddic-database-table--javascript-call-link---abenddic-database-tables-client-htm------the-client-dependency-of-a-database-view-is-determined-by-an-initial-column-with-the-built-in-dictionary-type-clnt--------ddic-append-views--javascript-call-link---abenddic-append-views-htm-----are-available-for-enhancing-the-database-views-in-abap-dictionary-delivered-by-sap-without-making-any-modifications-------suitable--cds-views--javascript-call-link---abencds-view-glosry-htm-----glossary-entry---can-be-defined-as--replacement-objects--javascript-call-link---abenddic-replacement-objects-htm-----for-database-views--in-this-case--reads-in--abap-sql--javascript-call-link---abenabap-sql-glosry-htm-----glossary-entry---access-the-replacement-objects-rather-than-the-database-views-------database-views-managed-by-abap-dictionary-should-not-be-accessed-directly-in-the-database--see--access-to-abap-managed-database-objects--javascript-call-link---abendatabase-access-recomm-htm--------basis-tables--the-basis-tables-of-database-views-can-be--transparent-tables--javascript-call-link---abentransparent-table-glosry-htm-----glossary-entry---and--global-temporary-tables--javascript-call-link---abenglobal-temporary-table-glosry-htm-----glossary-entry-----hint--the-basis-tables-of--cds-managed-ddic-views--javascript-call-link---abencds-mngdddic-view-glosry-htm-----glossary-entry---that-are-generated-for--cds-views--javascript-call-link---abencds-view-glosry-htm-----glossary-entry---can-also-be-other-ddic-database-views---view-fields--an-include-mechanism-can-be-used-to-add-individual-fields-or-all-fields-from-the-basis-tables-as-view-fields-of-a-ddic-database-view--when-individual-fields-are-used--a-name-other-than-the-name-in-the-basis-tables--can-be-defined-for-a-view-field--this-name-can-have-a-maximum-of-30-characters--must-meet-the-naming-conventions-for-component-names-of--ddic-structures--javascript-call-link---abenddic-structures-htm------and-cannot-be-a-reserved-name--the-reserved-names-that-cannot-be-used-are-specified-in-the-database-table-trese--fields-with-the-type-char-can-have-a-maximum-of-1333-characters--fields-with-the-type-lraw-or-lchr-must-be-at-the-end-of-the-view--only-one-such-field-is-allowed-per-view--furthermore--a-field-with-the-type-int2-or-int4--for-the-maximum-length-of-the-field--must-be-located-directly-in-front-of-this-field---to-use-all-fields--the----character-is-used-instead-of-the-field-name--if-the----character-is-used-for-individual-fields-of-a-basis-table-included-using-----all-fields-up-to-the-fields-specified-with----become-view-fields--if-the-structure-of-a-ddic-database-table-whose-fields-were-added-in-this-way-is-modified--the-structure-of-the-view-is-also-modified---hints------if-a--foreign-key-field--javascript-call-link---abenforeign-key-field-glosry-htm-----glossary-entry---is-added-as-a-view-field--it-keeps-this-attribute-and-all-associated-foreign-key-fields-become-the-foreign-key-of-the-view-------for--cds-managed-ddic-views--javascript-call-link---abencds-mngdddic-view-glosry-htm-----glossary-entry----the-view-fields-shown-as-key-fields-are-in-no-way-related-to-the-key-fields-defined-using--define-view--javascript-call-link---abencds-define-view-v1-htm-----for-the--cds-entity--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---------a-ddic-database-view-in-the-software-component-sap--basis-can-contain-a-maximum-of-749-view-fields-and-the-total-of-the-field-lengths--the-number-of-bytes-in-non-character-like-fields-plus-the-number-of-characters-in-flat-character-like-fields--must-not-exceed-4096--a-database-view-in-any-other-software-component-can-contain-a-maximum-of-1500-view-fields-and-the-total-of-the-field-lengths-is-not-checked-in-abap-dictionary---join-conditions--the-join-conditions-for-the-inner-join-can-be-formulated-using-equality-relationships-between-any-two-table-fields-in-the-basis-tables--the-inner-join-joins-the-rows-of-the-basis-tables-in-question-as-a-result-set-containing-all-combinations-of-rows-whose-columns-together-meet-the-join-conditions--if-there-are-no-rows-that-meet-the-join-conditions-in-the-basis-tables-in-question--no-row-is-created-in-the-result-set--if-there-is-a-suitable--foreign-key-dependency--javascript-call-link---abenddic-database-tables-forkeyrel-htm------including-generic-and-constant-foreign-keys--between-two-basis-tables--this-dependency-can-be-used-as-a-default-for-defining-join-conditions-in-abap-dictionary---maintenance-status--the-access-setting-in-the-maintenance-status-of-a-ddic-database-view-can-have-the-following-values-------read-only--the-database-view-can-only-be-used-to-read-data-with-abap-sql-------read--change--delete--and-insert--if-the-database-view-contains-only-a-single-basis-table--data-can-be--changed--javascript-call-link---abenopen-sql-writing-htm-----using-abap-sql---a-database-view-with-multiple-basis-tables-can-only-be-read-with-abap-sql--if-a-database-view-contains-only-a-single-table--data-can-be-inserted-in-this-table-using-the-view-with-the-abap-sql-statements--insert--javascript-call-link---abapinsert-dbtab-htm-----or--modify--javascript-call-link---abapinsert-dbtab-htm------the-following-options-are-available-for-the-content-of-the-table-fields-not-in-the-view-------if-the-table-field-is-defined-with--not-null--javascript-call-link---abenddic-database-tables-init-htm-----on-the-database--the-field-is-filled-with-the-corresponding-initial-value-------if-the-table-field-is-defined-with--not-null--javascript-call-link---abenddic-database-tables-init-htm-----on-the-database--and-there-is-no-initial-value--nothing-can-be-inserted-and-a-database-error-occurs-with-a-corresponding-exception-------if-the-table-field-is-not-defined-with--not-null--javascript-call-link---abenddic-database-tables-init-htm-----on-the-database--the-field-is-filled-with-the--null-value--javascript-call-link---abennull-value-glosry-htm-----glossary-entry-----hints------a-ddic-database-view-should-only-be-used-to-insert-data-in-the-table-if-the-flag-for-initial-values-is-set-for-all-table-fields-that-are-not-in-the-view-------it-is-not-usually-a-problem-to-modify-existing-data-records-using-a-database-view-in-cases-where-the-database-view-contains-all-key-fields-of-the-table-------like-a-ddic-database-table--the-maintenance-status-of-a-database-view-has-a--display-and-maintain--javascript-call-link---abenddic-database-tables-maint-htm-----setting-alongside-the-access-setting--the-setting-must-match-the-access-setting--in-database-views-containing-multiple-basis-tables--only-the-setting-display-maintenance-not-allowed-is-possible---table-buffering--just-like-in-ddic-database-tables--it-is-possible-to-define-for-a-database-view-whether-the-data-in-the--table-buffer--javascript-call-link---abentable-buffer-glosry-htm-----glossary-entry---is-buffered--the-same--buffering-types--javascript-call-link---abenddic-database-tables-buffer-htm-----can-be-defined-and--table-buffering-in-abap-sql--javascript-call-link---abensap-puffering-htm-----is-handled-in-the-same-way-for-views-and-for-ddic-database-tables-with-the-only-difference-being-that--when-data-is-modified-in-one-of-the-basis-tables--the-entire-buffer-is-invalidated-when-the--buffers-are-synchronized--javascript-call-link---abenbuffer-synchro-htm------regardless-of-the-buffering-type-in-client-dependent-views--however--this-only-affects-the-content-of-the-current-client---the-following-prerequisites-must-be-met-before-a-ddic-database-view-can-be-buffered-------a-basis-table-can-occur-in-no-more-than-nine-buffered-database-views-------if-all-fields-of-the-database-view-are-key-fields--these-fields-must-also-be-key-fields-of-the-basis-tables-------a-view-whose-data-is-written-to-using-abap-sql-cannot-have-a--replacement-object--javascript-call-link---abenddic-replacement-objects-htm-------hint--no--replacement-objects--javascript-call-link---abenddic-replacement-objects-htm-----can-be-created-for-an-existing-buffered-view-whose-data-can-be-written-to-using-abap-sql---example--the-ddic-database-view-demo--scarr--spfli-contains-fields-of-the-tables-scarr-and-spfli--other-names-are-assigned-to-these-fields-in-the-view---the-associated-database-object-could-be-as-follows---create-view-demo--scarr--spfli-----client-----id-----carrier-----flight-----departure-----destination---as-select----t1--mandt------t2--carrid------t1--carrname------t2--connid------t2--cityfrom------t2--cityto--from------scarr--t1-------spfli--t2-where-----t1--mandt-----t2--mandt--and-----t1--carrid----t2--carrid---the-view-can-be-accessed-as-follows-using-abap-sql---select-----------from-demo--scarr--spfli--------order-by-id--carrier--flight--------into-table-DATA(result).
cl\_demo\_output=>display( result ).



**📖 Source**: [abenddic_database_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm)

### abenddic_projection_views.htm

> **📖 Official SAP Documentation**: [abenddic_projection_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_projection_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

DDIC - Projection Views

A DDIC projection view is a special view for hiding fields from a single basis table. An SQL view is not created on the database. No selection conditions can be specified for a DDIC projection view.

The structure type defined using the view fields of the projection view can be referenced in ABAP programs using TYPE. A projection view can be accessed using ABAP SQL but not using CDS views, Native SQL, or AMDP. The database interface transforms an ABAP SQL statement that accesses a projection view to a platform-specific SQL statement that provides the correct result.

The Access setting in the maintenance status of a projection view can have the following values:

-   Read only

The projection view can only be used to read data with ABAP SQL.

-   Read, change, delete, and insert

The projection view can only be used to [change](javascript:call_link\('abenopen_sql_writing.htm'\)) data with ABAP SQL.

When lines are inserted using projection views, all table fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database.

Hints

-   As in a [DDIC database table](javascript:call_link\('abenddic_database_tables_client.htm'\)), the client dependency of a projection view is determined by an initial column with the built-in dictionary type CLNT.

-   Like a DDIC database table, the maintenance status of a projection view has a [Display and Maintain](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The setting must match the Access setting.

-   The basis table of a projection view can be a [transparent table](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry") and a [global temporary table](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry").

Example

The projection view DEMO\_SPFLI contains fields of the tables SPFLI. The view can be accessed as follows using ABAP SQL:

SELECT \*
       FROM demo\_spfli
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).



**📖 Source**: [abenddic_projection_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_projection_views.htm)

### abenddic_maintenance_views.htm

> **📖 Official SAP Documentation**: [abenddic_maintenance_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_maintenance_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

DDIC - Maintenance Views

A DDIC maintenance view is a special view for performing writes on multiple tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently.

A DDIC maintenance view is not defined on the database. The structure type defined using a maintenance view can be referenced in ABAP programs using TYPE. A maintenance view cannot, however, be accessed using ABAP SQL. Instead, the transaction SE54 can be used to create dialogs called maintenance dialogs for maintenance views, which can themselves be used to edit the contents of the tables of the maintenance views jointly in extended table maintenance (transactions SM30 and SM31).

When data records are inserted using DDIC maintenance views, all tables fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) on the database.

Primary Table and Secondary Tables

All DDIC database tables grouped in a DDIC maintenance view must be joined using [foreign key dependencies](javascript:call_link\('abenddic_database_tables_forkeyrel.htm'\)), which means that the join conditions are always derived from a foreign key in the case of maintenance views. The first table included in the maintenance view is known as the primary table of the maintenance view. The tables added to this primary table using foreign keys are known as secondary tables. The following restrictions apply when selecting the secondary tables of a maintenance view:

-   The secondary tables must have an N:1 dependency on the primary table or on the transitively preceding secondary table. This makes sure that no more than one dependent data record exists in each of the secondary tables for a specific data record in the primary table. An N:1 dependency exists if the secondary table is the [check table](javascript:call_link\('abencheck_table_glosry.htm'\) "Glossary Entry") in the [foreign key in question](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry").

-   If the secondary table is the [foreign key table](javascript:call_link\('abenforeign_key_table_glosry.htm'\) "Glossary Entry"), the foreign key fields must be key fields of a table or the foreign key must have the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") N:1 or N:C.

A maintenance view implements an inner join. All key fields in the primary table must be included in its maintenance view. All key fields of secondary tables that are not part of the foreign key (that is, they are not joined with a key field already in the view using a join condition) must also be included in the view. This makes sure that the records inserted using a maintenance view can be written correctly to the tables in the view.

Hint

If a DDIC database table is joined with its [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") in a DDIC maintenance view, the logon language is selected automatically for this table.

Time-Dependent Key

In maintenance views, the key can be divided into a non-time-dependent area and a time-dependent area. The time-dependent area can, for example, contain date fields and time fields. This means that the lines of these views have chronological importance.

Hint

The ability to change time-dependent views makes it possible to restrict the new entries inserted to those that are only missing time information.

Maintenance Status

The Access setting in the maintenance status of a maintenance view can have the following values:

-   Read only

The maintenance view can only be used to read data.

-   Read, change, delete, and insert

The maintenance view can be used to change, delete, and insert data.

-   Read and change

The maintenance view can be used to change data, but not delete or insert it.

-   Read and change (time-dependent views)

The maintenance view can be used to insert only entries whose non-time-dependent part of the key does not differ from existing entries.

Hint

Like a DDIC database table, the maintenance status of a DDIC maintenance view has a [Display and Maintenance](javascript:call_link\('abenddic_database_tables_maint.htm'\)) setting alongside the Access setting. The setting must match the Access setting. The setting Display/maintenance not allowed is not possible here.

Maintenance Characteristics of View Fields

Alongside the maintenance status of the view, characteristics called maintenance characteristics can be defined for each view field:

-   Standard

There are no restrictions on the view field.

-   Read-only

The DDIC maintenance view cannot be used to perform writes on the view field.

-   Subset

A field of this type is used to construct subsets when data is edited in extended table maintenance. Only a subset of the data is displayed. This subset is defined by entering an appropriate value in this field.

-   Hidden

A field of this type is not displayed in extended table maintenance and cannot be edited there. The content is initialized implicitly.

Delivery Class

A DDIC maintenance view also has a [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)). The delivery class of a maintenance view is analyzed in the extended table maintenance.

-   If the view is assigned one of the delivery classes G or E, the customer namespace for the entries of the view must be defined in the DDIC database table TRESC.

-   The transport interface of extended table maintenance must match the delivery class.

Regardless of this, the transport of the basis tables involved in upgrades and in transports between customer systems is determined solely by their [delivery class](javascript:call_link\('abenddic_database_tables_delivery.htm'\)).



**📖 Source**: [abenddic_maintenance_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_maintenance_views.htm)

### abenddic_help_views.htm

> **📖 Official SAP Documentation**: [abenddic_help_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_help_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) →  [DDIC - Table Views](javascript:call_link\('abenddic_table_views.htm'\)) → 

DDIC - Help Views

A DDIC help view is a special view for use in [search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry"). The selection methods of a search help can be database tables, DDIC database views, and the special help views. DDIC database tables restrict the search help to one table and DDIC database views restrict it to inner joins, whereas help views also make outer joins possible. A help view is not defined on the database. The structure type defined using a help view can be referenced in ABAP programs using TYPE. A help view cannot, however, be accessed using ABAP SQL.

The join conditions of a DDIC help view must be applied from existing foreign keys. Tables can be grouped in help views only if they are joined using [foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry"). The first table included in the help view is known as the primary table of the help view. The tables added to this primary table using foreign keys are known as secondary tables. The same restrictions apply when selecting secondary tables of a help view as to [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\)).

A DDIC help view implements an outer join, which means that the full content of the primary table of the help view is always displayed. If records in a secondary table cannot be read due to a selection condition, the content of the corresponding fields of the secondary table are displayed with initial values.

Hints

-   Like other views, help views can be used in elementary search helps if the selection is too complex to be defined using a single database table.

-   Unlike DDIC database views, help views implement an outer join, which is why this type is particularly well suited for including supplementary information such as explanatory texts from secondary tables. If the supplementary information were missing in an inner join, no part of the dataset would be selected.

-   If the selection is only made using a table and its text table, it is enough to specify the table directly as a selection method of the search help, since the fields of the text table can also be used as parameters in the search help in this case.

-   Help views should not be used if the selection is often restricted using fields of the secondary tables. In this case, a DDIC database view should be created instead. It might also be necessary to create additional suitable indexes for the basis tables.

-   Selections using help views can only be made quicker by making restrictions on the primary table. When accessing help views from the ABAP runtime environment, special selection routines are generated. These routines always make the selection using the primary table first and then use the records found as a key for selecting the supplementary information.



**📖 Source**: [abenddic_help_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_help_views.htm)

### abenddic_table_views.htm

> **📖 Official SAP Documentation**: [abenddic_table_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) → 

DDIC - Table Views

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

The definition of a DDIC table view consists of the following:

-   Basis tables

A list of DDIC database tables in ABAP Dictionary accessed by the view. Multiple tables are associated using joins.

-   View fields

A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](javascript:call_link\('abenddic_data_elements.htm'\)) can be assigned to a view field than used for the corresponding table field of the basis table. This can only happen if the type of the table field is defined using a data element with a [domain](javascript:call_link\('abenddic_domains.htm'\)) and if the new data element references the same domain. This makes it possible to adjust the semantic attributes of the view field to the view.

-   Key

A key of the view that consists of key fields. The tool derives the key of a view from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are thus marked as key fields. All rows determined by the view must be unique with respect to the key. If no key with this property can be identified, all fields of the view are key fields, which can be bad for performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.

-   Join conditions

Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the view is used to select the cross product of the basis tables. Each row in a table is combined with each row of the other table. Each join condition then selects the matching rows from the cross product.

-   Selection conditions

Used to restrict the read rows to specific values of view fields or other fields.

-   The possible comparison operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.

-   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") can be specified for DDIC maintenance views and DDIC help views using SYST-... or SY-....

-   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](javascript:call_link\('abensql_view_glosry.htm'\) "Glossary Entry") on the database:

-   [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\))

-   [DDIC Projection views](javascript:call_link\('abenddic_projection_views.htm'\))

-   [DDIC maintenance views](javascript:call_link\('abenddic_maintenance_views.htm'\))

-   [DDIC help views](javascript:call_link\('abenddic_help_views.htm'\))

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Hints

-   Projections can be implemented using both DDIC database views and with special projection views.

-   Only DDIC database tables can be specified as the basis tables of table views, and no other views.

-   In [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.

-   Views whose fields are all key fields should not be written to using [UPDATE FROM](javascript:call_link\('abapupdate.htm'\)) or [MODIFY FROM](javascript:call_link\('abapmodify_dbtab.htm'\)). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.

-   As in DDIC database tables, the [client dependency](javascript:call_link\('abenclient_dependency_glosry.htm'\) "Glossary Entry") of a table view that can be accessed using ABAP SQL (a DDIC database view or projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored here.

-   The table views cannot be maintained using the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   [CDS views](javascript:call_link\('abencds_v1_views.htm'\)) defined using the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") of the ABAP Core Data Services in [DDL source code](javascript:call_link\('abenddl_source_code_glosry.htm'\) "Glossary Entry") offer all the functions of table views and more. CDS views are, however, read-only, while some dictionary views can be modified.

Continue
[DDIC - Database Views](javascript:call_link\('abenddic_database_views.htm'\))
[DDIC - Projection Views](javascript:call_link\('abenddic_projection_views.htm'\))
[DDIC - Maintenance Views](javascript:call_link\('abenddic_maintenance_views.htm'\))
[DDIC - Help Views](javascript:call_link\('abenddic_help_views.htm'\))



**📖 Source**: [abenddic_table_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_table_views.htm)

### abenddic_external_views.htm

> **📖 Official SAP Documentation**: [abenddic_external_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_external_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dictionary Views](javascript:call_link\('abenddic_views.htm'\)) → 

DDIC - External Views

A DDIC external view is a special [dictionary view](javascript:call_link\('abendictionary_view_glosry.htm'\) "Glossary Entry") that [defines](javascript:call_link\('abenexternal_views.htm'\)) an [SAP HANA view](javascript:call_link\('abenhana_view_glosry.htm'\) "Glossary Entry") in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") in ABAP programs. The structure type defined using the view fields of an external view can be referenced in ABAP programs using TYPE. An external view can be specified as a source in [ABAP SQL read](javascript:call_link\('abenopen_sql_reading.htm'\)) statements

DDIC external views can only be created using the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") and only if the current database is an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). The SAP HANA view must exist in the [SAP HANA Repository](javascript:call_link\('abensap_hana_repository_glosry.htm'\) "Glossary Entry").

When a DDIC external view is activated, an alias with the name of the view is created on the SAP HANA database that points to the SAP HANA view. The names of the view fields of the external view can be defined differently from the names of the view fields of the SAP HANA view. The [runtime object](javascript:call_link\('abenruntime_object_glosry.htm'\) "Glossary Entry") of the external view accesses the alias on the SAP HANA database. This performs a mapping of HANA-specific data types to the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary. The following table lists the currently supported HANA-specific data types and indicates which ABAP Dictionary types they are mapped to by default.

HANA Type

Meaning

Type in ABAP Dictionary

SMALLINT

2-byte integer

INT2

INTEGER

4-byte integer

INT4

BIGINT

8-byte integer

INT8

DECIMAL

Packed number

DEC

SMALLDECIMAL

Packed number

DEC

FLOAT

Binary floating point number

FLTP

NVARCHAR

Unicode character string

CHAR

VARBINARY

Byte string

RAW

BLOB

Byte string

RAWSTRING

NCLOB

Unicode character string

STRING

DDIC external views can be displayed in the ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)) in the SAP GUI-based ABAP Workbench, but not maintained.

A DDIC external view can only be read using ABAP SQL if an SAP HANA database is being accessed in which the associated SAP HANA view exists. If not, the uncatchable exception DBSQL\_TABLE\_UNKNOWN is raised. External views can exist actively and be used as data types in a system whose standard database is not an SAP HANA database. Views of this type cannot, however, be accessed through the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") using ABAP SQL, only through a [secondary connection](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") to an SAP HANA database. Conversely, when an SAP HANA view in an SAP HANA database is accessed through a secondary connection in the current system, only an identically named DDIC database table or a DDIC view with suitable structure can exist actively in ABAP Dictionary.

Hints

-   The following restrictions currently apply to the use of DDIC external views in ABAP programs:

-   The structure of analytic views do not allow them to be read using [SELECT \*](javascript:call_link\('abapselect_list.htm'\)). The same basic rules apply to the statement SELECT in ABAP SQL as when using the HANA SQL statement SELECT, with individual columns and the addition GROUP BY needing to be specified. If SELECT \* is used, a runtime error occurs.

-   Calculation views with parameters can be access only if a default value is defined for each parameter. If not, reads are canceled and produce a runtime error.

-   DDIC external views should only be used in those cases that are not covered by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

-   Access to SAP HANA views in [SAP HANA XS](javascript:call_link\('abenxs_glosry.htm'\) "Glossary Entry"):

-   SAP HANA views in [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry") are stored in the SAP HANA Repository and DDIC external views can be used for access to these views from ABAP.

-   SAP HANA views in [SAP HANA XSA](javascript:call_link\('abenxsa_glosry.htm'\) "Glossary Entry"), the successor to [SAP HANA XSC](javascript:call_link\('abenxsc_glosry.htm'\) "Glossary Entry"), are usually [HDI objects](javascript:call_link\('abenhdi_object_glosry.htm'\) "Glossary Entry") for which no DDIC external views can be created. For access from ABAP, other methods must be used such as [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") or [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry").


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Enhancements

**Files**: 9 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Enhancements

Included pages: 9



**📖 Source**: [abenddic_external_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_external_views.htm)

### abenddic_enhancements.htm

> **📖 Official SAP Documentation**: [abenddic_enhancements.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_enhancements.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Enhancements

A [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)), [DDIC database table](javascript:call_link\('abenddic_database_tables.htm'\)), [DDIC database view](javascript:call_link\('abenddic_database_views.htm'\)), or [domain](javascript:call_link\('abenddic_domains.htm'\)) in ABAP Dictionary created in a system can be enhanced in a different system using customizing includes, append structures, or DDIC append views without making any modifications. Customizing includes indicate points already marked by SAP for enhancements, whereas append structures can be appended anywhere.

-   [Customizing includes](javascript:call_link\('abenddic_customizing_includes.htm'\))

-   [Append structures](javascript:call_link\('abenddic_append_structures.htm'\))

-   [DDIC append views](javascript:call_link\('abenddic_append_views.htm'\))

-   [Fixed value appends](javascript:call_link\('abenddic_fixed_value_appends.htm'\))

[Search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") can be expanded using [append search helps](javascript:call_link\('abenappend_search_help_glosry.htm'\) "Glossary Entry").

Enhancements are connected to [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") whenever they are defined in a [package](javascript:call_link\('abenpackage_glosry.htm'\) "Glossary Entry") that is assigned a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").

Hint

For [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry") are an option for enhancements that is based on the CDS DDL of ABAP CDS.

Continue
[DDIC - Customizing Includes](javascript:call_link\('abenddic_customizing_includes.htm'\))
[DDIC - Append Structures](javascript:call_link\('abenddic_append_structures.htm'\))
[DDIC - Append Views](javascript:call_link\('abenddic_append_views.htm'\))
[DDIC - Fixed Value Appends](javascript:call_link\('abenddic_fixed_value_appends.htm'\))



**📖 Source**: [abenddic_enhancements.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_enhancements.htm)

### abenddic_customizing_includes.htm

> **📖 Official SAP Documentation**: [abenddic_customizing_includes.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_customizing_includes.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

DDIC - Customizing Includes

A customizing include is a DDIC structure whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. Customizing includes can be included in [DDIC structures](javascript:call_link\('abenddic_structures.htm'\)) and [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) delivered by SAP. The customizing includes in DDIC structures and DDIC database tables delivered by SAP are usually empty. They are not associated with existing structures and reserve only the names of the structures. In customer or partner systems, these includes can be enhanced as part of an [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) in customizing by creating the included customizing includes and using customizing transactions to give them components. Any existing transparent DDIC database tables are not transformed, which can put the fields in different orders in the dictionary and on the database.

A customizing include can be included in multiple DDIC database tables or DDIC structures. Its enhancement is then applied to all DDIC database tables or DDIC structures in which it is included. An empty customizing include of a DDIC database table or DDIC structure does not need to be enhanced.

Enhancements of a delivered DDIC structure or DDIC database table using a customizing include are not modifications. If a customizing include is used to add fields to a DDIC database table or DDIC structure in the standard system, these fields are inserted automatically in the new DDIC structure or DDIC database table delivered by SAP in an upgrade.



**📖 Source**: [abenddic_customizing_includes.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_customizing_includes.htm)

### abenddic_append_structures.htm

> **📖 Official SAP Documentation**: [abenddic_append_structures.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_structures.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

DDIC - Append Structures

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) or [DDIC database table](javascript:call_link\('abenddic_database_tables.htm'\)) and which adds its components to this structure or table. In customer systems, append structures can be added to structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) for table fields.

The following enhancements can be made to a DDIC database table or structure using an append structure:

-   New components inserted (if allowed by the [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)))

-   [Foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") defined for existing fields of a DDIC database table

-   [Search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") bound to existing components

All enhancements are part of the append structure, which means that any changes made to these enhancements are made only using the append structure. The same applies to transports. When a DDIC database table or structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added using the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](javascript:call_link\('abenddic_database_tables_adj.htm'\)), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to enhance DDIC database tables:

-   Append structures can only be appended to [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry").

-   No append structures can be appended to DDIC database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.

-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)). No secondary index can be defined for the append structure itself.

-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified using the append structure.

Enhancements of SAP structures or SAP tables using append structures in customer systems do not constitute modifications. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures of this type with names from the customer namespace to avoid naming conflicts. After an upgrade, the associated append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Enhancements](javascript:call_link\('abenddic_extend_type.htm'\))

Hint

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE enhances the structure DEMO\_STRUCTURE.

Continue
[DDIC - Dictionary DDL for Structure Enhancements](javascript:call_link\('abenddic_extend_type.htm'\))



**📖 Source**: [abenddic_append_structures.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_structures.htm)

### abenddic_extend_type.htm

> **📖 Official SAP Documentation**: [abenddic_extend_type.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_extend_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) →  [DDIC - Append Structures](javascript:call_link\('abenddic_append_structures.htm'\)) → 

DDIC - Dictionary DDL for Structure Enhancements

In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a structure or DDIC database table can be given a source-code-based enhancement known as an append structure in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, however, the source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\))

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\))



**📖 Source**: [abenddic_extend_type.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_extend_type.htm)

### abenddicddl_extend_type.htm

> **📖 Official SAP Documentation**: [abenddicddl_extend_type.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_extend_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) →  [DDIC - Append Structures](javascript:call_link\('abenddic_append_structures.htm'\)) →  [DDIC - Dictionary DDL for Structure Enhancements](javascript:call_link\('abenddic_extend_type.htm'\)) → 

DDIC DDL - EXTEND TYPE

Syntax

[structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\))
EXTEND TYPE struct*|*dbtab WITH append\_struct {
  ...
  [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\))
  *\[*...
  [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\))
  ...*\]*;
  ...
  [include;](javascript:call_link\('abenddicddl_define_struct_incl.htm'\))
  ...
}

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement for defining an ABAP Dictionary [append structure](javascript:call_link\('abenddic_append_structures.htm'\)) append\_struct in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

-   The statement EXTEND TYPE adds the append structure append\_struct defined here either to an existing structure struct or to a DDIC database table dbtab.

-   The mandatory properties of the append structure must be specified in front of the statement EXTEND TYPE using the same annotations [structure\_annos](javascript:call_link\('abenddicddl_define_struct_props.htm'\)) as in the definition of a structure.

-   As in the definition of a structure using [DEFINE STRUCTURE](javascript:call_link\('abenddicddl_define_structure.htm'\)), the components of the append structure are defined in a semicolon-separated list in curly brackets { }, either as individual components [component](javascript:call_link\('abenddicddl_define_struct_comps.htm'\)) or by including include structures [include](javascript:call_link\('abenddicddl_define_struct_incl.htm'\)).

-   As when including structures, an assignment to a search help and a definition of a foreign key dependency can be overwritten using additions [extend](javascript:call_link\('abenddicddl_define_struct_comp_ext.htm'\)) in a blank-separated list.

Hints

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Adds the append structure DEMO\_APPEND\_STRUCTURE to the structure DEMO\_STRUCTURE in the ADT.

@EndUserText.label : 'Demo append structure'
@AbapCatalog.enhancementCategory : #EXTENSIBLE\_CHARACTER\_NUMERIC
extend type demo\_structure with demo\_append\_structure {
  comp3 : dats;
  comp4 : tims; }

The source code used to define the structure DEMO\_STRUCTURE is not modified by this enhancement. In the ADT, however, an icon indicates that the structure is enhanced using DEMO\_APPEND\_STRUCTURE.



**📖 Source**: [abenddicddl_extend_type.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_extend_type.htm)

### abenddic_extend_type.htm

> **📖 Official SAP Documentation**: [abenddic_extend_type.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_extend_type.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) →  [DDIC - Append Structures](javascript:call_link\('abenddic_append_structures.htm'\)) → 

DDIC - Dictionary DDL for Structure Enhancements

In the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a structure or DDIC database table can be given a source-code-based enhancement known as an append structure in [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). Here, however, the source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\))

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](javascript:call_link\('abenddicddl_extend_type.htm'\))



**📖 Source**: [abenddic_extend_type.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_extend_type.htm)

### abenddic_append_structures.htm

> **📖 Official SAP Documentation**: [abenddic_append_structures.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_structures.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

DDIC - Append Structures

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](javascript:call_link\('abenddic_structures.htm'\)) or [DDIC database table](javascript:call_link\('abenddic_database_tables.htm'\)) and which adds its components to this structure or table. In customer systems, append structures can be added to structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](javascript:call_link\('abenddic_database_tables_techstruc.htm'\)) for table fields.

The following enhancements can be made to a DDIC database table or structure using an append structure:

-   New components inserted (if allowed by the [enhancement category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)))

-   [Foreign keys](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") defined for existing fields of a DDIC database table

-   [Search helps](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") bound to existing components

All enhancements are part of the append structure, which means that any changes made to these enhancements are made only using the append structure. The same applies to transports. When a DDIC database table or structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added using the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](javascript:call_link\('abenddic_database_tables_adj.htm'\)), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to enhance DDIC database tables:

-   Append structures can only be appended to [transparent tables](javascript:call_link\('abentransparent_table_glosry.htm'\) "Glossary Entry").

-   No append structures can be appended to DDIC database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.

-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](javascript:call_link\('abenddic_database_tables_index.htm'\)). No secondary index can be defined for the append structure itself.

-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified using the append structure.

Enhancements of SAP structures or SAP tables using append structures in customer systems do not constitute modifications. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures of this type with names from the customer namespace to avoid naming conflicts. After an upgrade, the associated append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") in the [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Enhancements](javascript:call_link\('abenddic_extend_type.htm'\))

Hint

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE enhances the structure DEMO\_STRUCTURE.

Continue
[DDIC - Dictionary DDL for Structure Enhancements](javascript:call_link\('abenddic_extend_type.htm'\))



**📖 Source**: [abenddic_append_structures.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_structures.htm)

### abenddic_append_views.htm

> **📖 Official SAP Documentation**: [abenddic_append_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_views.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

DDIC - Append Views

[DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)) delivered by SAP can be enhanced by partners and customers using views known as DDIC append views, without making any modifications. The name of an append view is subject to the same rules as the name of a [dictionary view](javascript:call_link\('abenddic_views.htm'\)) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

Further fields from basis tables in the DDIC database view can be added to DDIC append views as view fields. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a DDIC database view. An append view is assigned to exactly one DDIC database view. More than one append view can be created for a DDIC database view.

When an DDIC append view is activated, an [append structure](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") with this name is created in ABAP Dictionary and its components become the additional view fields of the append view.

If a DDIC database view is activated, all DDIC append views for this view are found and their fields are appended to the DDIC database view. The append structure of the append view is added to the structure of the DDIC database view. If an append view is created or modified, the associated DDIC database view is adjusted to this change automatically when the append view is activated.

Hints

-   DDIC append views are possible only for DDIC database views and not for other [DDIC views](javascript:call_link\('abenddic_views.htm'\)).

-   In the case of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") associated with [CDS-managed DDIC views](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"), [CDS view extensions](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") are a separate option for extensions and work in the similar way to append views. When a CDS view extension is created, an append view is created that is added to the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry").

Example

The DDIC append view DEMO\_APPEND\_VIEW is added to the DDIC database view DEMO\_ORIGINAL. The program DEMO\_APPEND\_VIEW uses [SELECT](javascript:call_link\('abapselect.htm'\)) to access the extended view and also displays the components of the structures in question.



**📖 Source**: [abenddic_append_views.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_append_views.htm)

### abenddic_fixed_value_appends.htm

> **📖 Official SAP Documentation**: [abenddic_fixed_value_appends.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_fixed_value_appends.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

DDIC - Fixed Value Appends

[Domains](javascript:call_link\('abenddic_domains.htm'\)) delivered by SAP can be enhanced by partners and customers using appends known as fixed value appends, without making any modifications. The name of a fixed value append is subject to the same rules as the name of a domain and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A fixed value append adds further [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") or intervals to the value range of a domain. A domain can have more than one fixed value append.

When a domain is activated, all fixed value appends for this domain are found and their fixed values and intervals added to the domain. When a fixed value append is created or modified, the associated domain is adjusted to this change automatically when the fixed value append is activated.

Example

The fixed value append DEMO\_FIXED\_VALUE\_APPEND is added to the domain DEMO\_ORIGINAL. The program DEMO\_FIXED\_VALUE\_APPEND reads the fixed values and intervals of the extended domain and displays them. In the table, the column APPVAL indicates which fixed values and intervals come from the fixed value append.


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Dependency Rules

**Files**: 7 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Dependency Rules

Included pages: 7



**📖 Source**: [abenddic_fixed_value_appends.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_fixed_value_appends.htm)

### abenddic_dependency_rules.htm

> **📖 Official SAP Documentation**: [abenddic_dependency_rules.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dependency_rules.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Dependency Rules

A dependency rule is a dictionary object, an instance of which is created on an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). A dependency rule is defined for one or more DDIC database tables. From a relational expression of a selection condition, it derives an additional condition for these DDIC database tables. The SAP HANA database optimizer evaluates this instruction when the DDIC database tables are read. If possible, it creates the additional selection conditions and uses AND to join it with the other conditions.

ABAP Dictionary dependency rules are defined using the

-   [Dictionary DDL for defining dependency rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))

Caution

It cannot be guaranteed that the SAP HANA database evaluates a dependency rule correctly by creating the required additional selection condition. In queries with [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"), alias names, and so on, it can occur that the optimizer does not detect the selection condition in question. For this reason, dependency rules must only be defined in ways that do not modify the result set and that are useful for the internal optimizer. When a DDIC database table is accessed by an application program, the result must always be the same, regardless of any dependency rules. This is the only way to avoid producing results that are dependent on the behavior of the optimizer.

Hints

-   Dependency rules usually join semantic columns of a DDIC database table with technical columns of the same table. Semantic columns contain regular data and technical columns contain data used for internal database processes. ABAP programs should not access the data in technical columns in most cases. A dependency rule can be used to create additional selection conditions from selection conditions for semantic columns. This modifies access to the table in a transparent way for the ABAP program.

-   One important application for dependency rules is the [optimization of access to old data](javascript:call_link\('abenhana_data_aging_druls.htm'\)) in [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") where [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is enabled. In this case, dependency rules join the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") of a DDIC database table with regular date columns in the table.

-   In all SQL reads on DDIC database tables, the SAP HANA database optimizer evaluates their dependency rules. This is done regardless of the [access type](javascript:call_link\('abenabap_managed_db_objects_access.htm'\)) and covers access with ABAP SQL, AMDP, and Native SQL, plus access to views that have a DDIC database table of this type as a data source. Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).

-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\))



**📖 Source**: [abenddic_dependency_rules.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dependency_rules.htm)

### abenddic_define_dependency_rule.htm

> **📖 Official SAP Documentation**: [abenddic_define_dependency_rule.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dependency_rule.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) → 

DDIC - Dictionary DDL for Defining Dependency Rules

An ABAP Dictionary [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") is defined as a source-code-based rule in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). A dependency rule is defined in a separate piece of [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") and is saved and transported with this code. In a single piece of DRUL source code for dependency rules, the following Dictionary DDL statement can define exactly one dependency rule with the same name as the code:

-   [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))

Hints

-   The [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") of dependency rules has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DRUL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))



**📖 Source**: [abenddic_define_dependency_rule.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dependency_rule.htm)

### abenddicddl_define_drul.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_drul.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) → 

DDIC DDL - DEFINE DEPENDENCY RULE

Syntax

DEFINE [FILTER](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))*|* [JOIN](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) DEPENDENCY RULE drul
  ON dbtab *\[*, ...*\]*
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement used to define a [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). The statement has two variants:

-   [DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)) for filter dependency rules

-   [DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) for join dependency rules

The name drul of a dependency rule must comply with the naming conventions for [dictionary types](javascript:call_link\('abenddic_data_types.htm'\)) and can have a maximum of 30 characters. The name is in the namespace of the ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) and must match the name of the [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry").

The names dbtab of DDIC database tables for which the dependency rule is defined are specified after ON.

-   In the case of filter dependency rules, exactly one DDIC database table must be specified.

-   In the case of join dependency rules, comma-separated DDIC database tables must be specified.

cond\_pattern is used to specify a pattern for a relational expression after IF. In the case of reads made on the database table dbtab, the SAP HANA database optimizer searches for this pattern in the associated WHERE condition or ON condition. If the pattern is found, the optimizer uses AND to add the condition derived\_cond specified after THEN to the corresponding WHERE condition or ON condition. The potential conditions are specified in the same way as in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") or [CDS DCL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") syntax and are described in the filter and join dependency rules.

Caution

It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

Hints

-   The derivation of an additional condition derived\_cond from a pattern cond\_pattern usually defines a dependency between semantic and technical columns of a DDIC database table. When an application accesses a table with a specific selection condition for semantic columns, an additional condition for technical columns is created implicitly. In the [optimization of access to old data](javascript:call_link\('abenhana_data_aging_druls.htm'\)), regular date columns are the semantic columns and the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") is the technical column.

-   If multiple dependency rules are defined for a DDIC database table, AND is used to join all additional conditions and append them to the original condition.

-   Dependency rules can be defined for DDIC database tables only; they cannot be defined for DDIC views. The SAP HANA database optimizer evaluates all SQL reads on these tables. These include reads made with ABAP SQL, AMDP, and Native SQL, plus all reads made on views that contain the DDIC database table as a data source.

-   Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.

-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))
[DDIC DDL - DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\))



**📖 Source**: [abenddicddl_define_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_drul.htm)

### abenddicddl_define_filter_drul.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_filter_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_filter_drul.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) →  [DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) → 

DDIC DDL - DEFINE FILTER DEPENDENCY RULE

Syntax

DEFINE FILTER DEPENDENCY RULE drul
  ON dbtab
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

Variant of the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) used to define a filter [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). A filter dependency rule can be defined for exactly one DDIC database table dbtab. It derives an additional filter condition derived\_cond from the pattern cond\_pattern. When the DDIC database table is read, the SAP HANA database optimizer finds the pattern in the WHERE condition and, if necessary, adds the additional filter condition AND to this condition.

cond\_pattern

In cond\_pattern, a pattern from a relational expression can be specified in the curly brackets after IF as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs

It is not possible to join multiple expressions using AND or OR or to negate them using NOT.

-   The following can be specified as the left side lhs of the comparison:

-   dbtab.column for a column column of the DDIC database table dbtab.

-   The following can be specified as the right side rhs of the comparison:

-   dbtab.column for a column column of the DDIC database table dbtab.

-   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).

-   A numbered placeholder $1, $2, ...

derived\_cond

In derived\_cond, a template from a relational expression can be specified in the curly brackets after THEN as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs *\[*OR lhs =*|*<*|*\>*|*<=*|*\>= rhs ...*\]*

Single comparisons cannot be placed in parentheses ( ). Negations using NOT are not possible.

-   The following can be specified as the left side lhs of a comparison:

-   dbtab.column for the column column of the database table dbtab.

-   The following can be specified as the right side rhs of a comparison:

-   dbtab.column for the column column of the database table dbtab.

-   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).

-   A numbered placeholder $1, $2, ..., which must also be specified in cond\_pattern. When the condition is added, the operand for the condition is inserted here for which the same placeholder exists in the pattern cond\_pattern.

-   [Built-in functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) in [ABAP CDS](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) syntax.

-   [Simple case distinctions](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) in ABAP CDS syntax.

Hints

-   It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

-   The additional condition for a query can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05) by choosing Display Execution Plan.

Example

The following dependency rule demonstrates how the additional condition works:

DEFINE FILTER DEPENDENCY RULE demo\_drul\_1
  ON demo\_parts\_1
    IF { demo\_parts\_1.value > $1 }
      THEN { demo\_parts\_1.area = $1 }

On the SAP HANA database, it modifies the result set of every read performed on the DDIC database table DEMO\_PARTS\_1. This is done for demonstration purposes here and should never occur in real situations. The program DEMO\_DEPENDENCY\_RULE\_1 uses identical SELECT statements to access the DDIC database table DEMO\_PARTS\_1 with a dependency rule and an identical table, DEMO\_PARTS, without a dependency rule:

DATA num TYPE i.
cl\_demo\_input=>request( CHANGING field = num ).
"Dependency Rule demo\_drul\_1
SELECT \*
       FROM demo\_parts\_1
       WHERE value > @num
       ORDER BY id
       INTO TABLE @DATA(result1).
cl\_demo\_output=>write( result1 ).
"No Dependency Rule
SELECT \*
       FROM demo\_parts
       WHERE value > @num
       ORDER BY id
       INTO TABLE @DATA(result2).
cl\_demo\_output=>display( result2 ).

When DEMO\_PARTS\_1 is accessed, the SAP HANA database optimizer evaluates the dependency rule. It finds the pattern

demo\_parts\_1.value > $1

and adds the additional condition accordingly to create the following logical condition:

WHERE value > @num AND area = @num.

This restricts the result set to those rows in which the column AREA also has the value of num. This restriction does not apply when DEMO\_PARTS is accessed.

If the first SELECT statement is transformed into a [WITH](javascript:call_link\('abapwith.htm'\)) statement or if alias names are used, for example, the optimizer may not find the pattern and may not add an additional condition. In this case, the result of this example is dependent on the behavior of the optimizer, which should never occur in production programs.

Example

The following filter dependency rule for the DDIC database table DEMO\_PARTS\_2 must not modify the result set. For this to happen, the data in the DDIC database table must have the expected values.

DEFINE FILTER DEPENDENCY RULE demo\_drul\_2
  ON demo\_parts\_2
    IF { demo\_parts\_2.value >= 30 }
      THEN { demo\_parts\_2.area >= 3 }

The program DEMO\_DEPENDENCY\_RULE\_2 uses identical SELECT statements to access the DDIC database table DEMO\_PARTS\_2 with a dependency rule and an identical table, DEMO\_PARTS, without a dependency rule:

"Dependency Rule demo\_drul\_2
SELECT \*
       FROM demo\_parts\_2
       WHERE value >= 30  AND value < 40
       ORDER BY id
       INTO TABLE @DATA(result1).
"No Dependency Rule
SELECT \*
       FROM demo\_parts
       WHERE value >= 30 AND value < 40
       ORDER BY id
       INTO TABLE @DATA(result2).
ASSERT result1 = result2.

If the data in the DDIC database table is structured so that in rows where the column VALUE contains values greater than or equal to 30 the values in the column AREA are greater than or equal to 3, the result sets of both reads are identical. To derive an additional condition with a dependency on the condition value < 40, a further filter dependency rule could be defined for the same DDIC database table.



**📖 Source**: [abenddicddl_define_filter_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_filter_drul.htm)

### abenddicddl_define_join_drul.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_join_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_join_drul.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) →  [DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) → 

DDIC DDL - DEFINE JOIN DEPENDENCY RULE

Syntax

DEFINE JOIN DEPENDENCY RULE drul
  ON dbtab1, dbtab2
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

Variant of the [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\)) used to define a join [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). A join dependency rule can be defined for exactly two database tables. dbtab1 and dbtab2, separated by a comma. It derives an additional join condition derived\_cond from the pattern cond\_pattern When two DDIC database tables joined by a join expression are read, the SAP HANA database optimizer finds the pattern in the ON condition of the expression and, if necessary, adds the additional join condition AND to this condition. Any additional conditions defined by [filter dependency rules](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)) for the two database rules are also applied to the other DDIC database table, if they apply to the columns specified in the join condition.

cond\_pattern

In cond\_pattern, a pattern from a relational expression can be specified in the curly brackets after IF as follows:

lhs = rhs *\[*AND lhs = rhs ...*\]*

Comparisons with the operator \= joined using AND are possible. Joins using OR or negations using NOT are not possible.

-   The following can be specified as the left side lhs of the comparison:

-   dbtab1.column or dbtab2.column for a column column of the DDIC database tables dbtab1 or dbtab2.

-   The following can be specified as the right side rhs of the comparison:

-   dbtab1.column or dbtab2.column for a column column of the DDIC database tables dbtab1 or dbtab2.

-   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).

-   A numbered placeholder $1, $2, ...

derived\_cond

In derived\_cond, a template from a relational expression can be specified in the curly brackets after THEN as follows:

lhs =*|*<*|*\>*|*<=*|*\>= rhs *\[*OR lhs =*|*<*|*\>*|*<=*|*\>= rhs ...*\]*

Single comparisons cannot be placed in parentheses ( ). Negations using NOT are not possible.

-   The following can be specified as the left side lhs of a comparison:

-   dbtab1.column or dbtab2.column for a column column of the database column dbtab2.column or dbtab2.column.

-   The following can be specified as the right side rhs of a comparison:

-   dbtab1.column or dbtab2.column for a column column of the database column dbtab2.column or dbtab2.column.

-   A character literal or a numeric literal. This syntax is the same as in [literals in ABAP CDS](javascript:call_link\('abencds_literal_v2.htm'\)).

-   A numbered placeholder $1, $2, ..., which must also be specified in cond\_pattern. When the condition is added, the operand for the condition is inserted here for which the same placeholder exists in the pattern cond\_pattern.

-   [Built-in functions in ABAP Dictionary](javascript:call_link\('abenddic_builtin_functions.htm'\)) in [ABAP CDS](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) syntax.

-   [Simple case distinctions](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) in ABAP CDS syntax.

Hints

-   It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

-   The additional condition for a query can be viewed in the [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05) by choosing Display Execution Plan.

Example

The following dependency rules are defined:

DEFINE FILTER DEPENDENCY RULE demo\_drul\_3
  ON demo\_parts\_3
    IF { demo\_parts\_3.value >= 30 }
      THEN { demo\_parts\_3.area >= 3 }
DEFINE FILTER DEPENDENCY RULE demo\_drul\_4
  ON demo\_parts\_3
    IF { demo\_parts\_3.value < 40 }
      THEN { demo\_parts\_3.area < 4 }
DEFINE JOIN DEPENDENCY RULE demo\_drul\_5
  ON demo\_parts\_3, demo\_parts\_4
    IF { demo\_parts\_3.client = demo\_parts\_4.client AND
         demo\_parts\_3.id     = demo\_parts\_4.id     AND
         demo\_parts\_3.value  = demo\_parts\_4.value }
      THEN { demo\_parts\_3.area  = demo\_parts\_4.area }

The program DEMO\_DEPENDENCY\_RULE\_3 uses the following SELECT statement to access DEMO\_PARTS\_3 and DEMO\_PARTS\_4:

SELECT demo\_parts\_3~id, demo\_parts\_3~value, demo\_parts\_4~text
       FROM demo\_parts\_3
         INNER JOIN demo\_parts\_4
           ON demo\_parts\_3~id    = demo\_parts\_4~id AND
              demo\_parts\_3~value = demo\_parts\_4~value
       WHERE demo\_parts\_3~value >= 30 AND
             demo\_parts\_3~value <  40
       ORDER BY demo\_parts\_3~id
       INTO TABLE @DATA(result).

The SAP HANA database optimizer adds the following to the ON condition implicitly:

AND demo\_parts\_3~area = demo\_parts\_4~area

It also appends the following addition filter conditions to the WHERE condition implicitly:

AND demo\_parts\_3~area >= 3
AND demo\_parts\_3~area <  4
AND demo\_parts\_4~area >= 3
AND demo\_parts\_4~area <  4

If the data in the DDIC database tables is structured correctly, the dependency rules do not modify the result set.



**📖 Source**: [abenddicddl_define_join_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_join_drul.htm)

### abenddicddl_define_drul.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_drul.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) →  [DDIC - Dictionary DDL for Defining Dependency Rules](javascript:call_link\('abenddic_define_dependency_rule.htm'\)) → 

DDIC DDL - DEFINE DEPENDENCY RULE

Syntax

DEFINE [FILTER](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))*|* [JOIN](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) DEPENDENCY RULE drul
  ON dbtab *\[*, ...*\]*
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

[Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry") statement used to define a [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry"). The statement has two variants:

-   [DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\)) for filter dependency rules

-   [DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\)) for join dependency rules

The name drul of a dependency rule must comply with the naming conventions for [dictionary types](javascript:call_link\('abenddic_data_types.htm'\)) and can have a maximum of 30 characters. The name is in the namespace of the ABAP Dictionary [data types](javascript:call_link\('abenddic_data_types.htm'\)) and must match the name of the [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry").

The names dbtab of DDIC database tables for which the dependency rule is defined are specified after ON.

-   In the case of filter dependency rules, exactly one DDIC database table must be specified.

-   In the case of join dependency rules, comma-separated DDIC database tables must be specified.

cond\_pattern is used to specify a pattern for a relational expression after IF. In the case of reads made on the database table dbtab, the SAP HANA database optimizer searches for this pattern in the associated WHERE condition or ON condition. If the pattern is found, the optimizer uses AND to add the condition derived\_cond specified after THEN to the corresponding WHERE condition or ON condition. The potential conditions are specified in the same way as in the [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") or [CDS DCL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") syntax and are described in the filter and join dependency rules.

Caution

It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

Hints

-   The derivation of an additional condition derived\_cond from a pattern cond\_pattern usually defines a dependency between semantic and technical columns of a DDIC database table. When an application accesses a table with a specific selection condition for semantic columns, an additional condition for technical columns is created implicitly. In the [optimization of access to old data](javascript:call_link\('abenhana_data_aging_druls.htm'\)), regular date columns are the semantic columns and the [temperature column](javascript:call_link\('abentemperature_column_glosry.htm'\) "Glossary Entry") is the technical column.

-   If multiple dependency rules are defined for a DDIC database table, AND is used to join all additional conditions and append them to the original condition.

-   Dependency rules can be defined for DDIC database tables only; they cannot be defined for DDIC views. The SAP HANA database optimizer evaluates all SQL reads on these tables. These include reads made with ABAP SQL, AMDP, and Native SQL, plus all reads made on views that contain the DDIC database table as a data source.

-   Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).

-   As in the [CDS syntax](javascript:call_link\('abencds_general_syntax_rules.htm'\)), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.

-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE FILTER DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_filter_drul.htm'\))
[DDIC DDL - DEFINE JOIN DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_join_drul.htm'\))



**📖 Source**: [abenddicddl_define_drul.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_drul.htm)

### abenddic_define_dependency_rule.htm

> **📖 Official SAP Documentation**: [abenddic_define_dependency_rule.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dependency_rule.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dependency Rules](javascript:call_link\('abenddic_dependency_rules.htm'\)) → 

DDIC - Dictionary DDL for Defining Dependency Rules

An ABAP Dictionary [dependency rule](javascript:call_link\('abendependency_rule_glosry.htm'\) "Glossary Entry") is defined as a source-code-based rule in the [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") [Dictionary DDL](javascript:call_link\('abendictionary_ddl_glosry.htm'\) "Glossary Entry"). A dependency rule is defined in a separate piece of [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") and is saved and transported with this code. In a single piece of DRUL source code for dependency rules, the following Dictionary DDL statement can define exactly one dependency rule with the same name as the code:

-   [DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))

Hints

-   The [DRUL source code](javascript:call_link\('abendrul_source_code_glosry.htm'\) "Glossary Entry") of dependency rules has its own editor in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), which is documented there. DRUL source code can also be displayed in [Repository Browser](javascript:call_link\('abenrepository_browser_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry").

-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE DEPENDENCY RULE](javascript:call_link\('abenddicddl_define_drul.htm'\))


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Dynamic Caches

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Dynamic Caches

Included pages: 4



**📖 Source**: [abenddic_define_dependency_rule.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dependency_rule.htm)

### abenddic_dynamic_caches.htm

> **📖 Official SAP Documentation**: [abenddic_dynamic_caches.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dynamic_caches.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

DDIC - Dynamic Caches

Interface between [cached views](javascript:call_link\('abenhana_cached_views.htm'\)) in SAP HANA and dictionary views.

-   [Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))

Continue
[DDIC - Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\))



**📖 Source**: [abenddic_dynamic_caches.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_dynamic_caches.htm)

### abenddic_define_dynamic_cache.htm

> **📖 Official SAP Documentation**: [abenddic_define_dynamic_cache.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dynamic_cache.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\)) → 

DDIC - Dictionary DDL for Defining Dynamic Caches

Interface between [cached views](javascript:call_link\('abenhana_cached_views.htm'\)) in SAP HANA and dictionary views.

-   [DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))

Continue
[DDIC DDL - DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))



**📖 Source**: [abenddic_define_dynamic_cache.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dynamic_cache.htm)

### abenddicddl_define_dynamic_cache.htm

> **📖 Official SAP Documentation**: [abenddicddl_define_dynamic_cache.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_dynamic_cache.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\)) →  [DDIC - Dictionary DDL for Defining Dynamic Caches](javascript:call_link\('abenddic_define_dynamic_cache.htm'\)) → 

DDIC DDL - DEFINE DYNAMIC CACHE

Syntax

DEFINE DYNAMIC CACHE{ ... }

Effect

Interface between [cached views](javascript:call_link\('abenhana_cached_views.htm'\)) in SAP HANA and dictionary views.



**📖 Source**: [abenddicddl_define_dynamic_cache.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddicddl_define_dynamic_cache.htm)

### abenddic_define_dynamic_cache.htm

> **📖 Official SAP Documentation**: [abenddic_define_dynamic_cache.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dynamic_cache.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Dynamic Caches](javascript:call_link\('abenddic_dynamic_caches.htm'\)) → 

DDIC - Dictionary DDL for Defining Dynamic Caches

Interface between [cached views](javascript:call_link\('abenhana_cached_views.htm'\)) in SAP HANA and dictionary views.

-   [DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))

Continue
[DDIC DDL - DEFINE DYNAMIC CACHE](javascript:call_link\('abenddicddl_define_dynamic_cache.htm'\))


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Expressions (log_exp) / Comparison Expressions (rel_exp) / rel_exp - Comparison Rules / rel_exp - Comparing Elementary Data Types / rel_exp - Comparison Type of Calculation Expressions

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2



**📖 Source**: [abenddic_define_dynamic_cache.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_define_dynamic_cache.htm)

### abenlogic_functions.htm

> **📖 Official SAP Documentation**: [abenlogic_functions.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogic_functions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) → 

Logical Functions

Logical functions are a part of [built-in functions](javascript:call_link\('abenbuilt_in_functions.htm'\)). They are divided into:

-   [Boolean functions](javascript:call_link\('abenboole_functions.htm'\))

-   [Predicate functions](javascript:call_link\('abenpredicate_functions.htm'\))

Hint

The program DEMO\_EXPRESSIONS shows examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool, Boolean Functions](javascript:call_link\('abenboole_functions.htm'\))



**📖 Source**: [abenlogic_functions.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogic_functions.htm)

### abenboole_functions.htm

> **📖 Official SAP Documentation**: [abenboole_functions.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_functions.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Functions](javascript:call_link\('abenlogic_functions.htm'\)) → 

boolc, boolx, xsdbool, Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The Boolean functions determine the [truth value](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry") of a logical expression [log\_exp](javascript:call_link\('abenlogexp.htm'\)) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type dependent on the function and expresses the truth value of the logical expression with a value of this type.

Hint

These functions can be considered a partial replacement for the Boolean data type for truth values that is not available in ABAP. In particular, xsdbool and, under certain circumstances, boolc can be used in many operand positions where values of the type abap\_bool of the type pool ABAP are expected.

Variant 1

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](javascript:call_link\('abenprocess_functions.htm'\)) and can be specified in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and in [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Hints

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be processed directly using the function [translate](javascript:call_link\('abentranslate_functions.htm'\)) or another suitable [processing function](javascript:call_link\('abenprocess_functions.htm'\)).

-   The result of boolc should not be compared with the constants abap\_true and abap\_false in relational expressions, since the latter converts from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is to be executed anyway, the function xsdbool can be used instead of boolc whose result has the same ABAP type as abap\_bool.

-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since a blank and no empty string is returned. If this is desired, the function xsdbool can be used instead of boolc.

-   If boolc is used in inappropriate places as specified in the points above, this leads to a syntax warning, which can be hidden using a pragma.

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Call of a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](javascript:call_link\('abenbit_functions.htm'\)) were executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](javascript:call_link\('abenbit_functions.htm'\)) were executed. bit expects a data object of the type i. In principle, boolx belongs to the [bit functions](javascript:call_link\('abenbit_functions.htm'\)) and can be used in all positions where a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is also allowed.

Hint

The function boolx can be used for efficient storage of sequences of truth values.

Example

The result of the following [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") is hexadecimal 55, which corresponds to the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

DATA(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value "X" for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from the ABAP Dictionary. This type, which refers to the identically named domain of type CHAR and length 1, is handled like a real Boolean type in serializations and deserializations to or from [asXML](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) and [asJSON](javascript:call_link\('abenabap_asjson_schema.htm'\)) using [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and [character-like expression positions](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

Hints

-   The result of xsdbool can be used like a value of the type abap\_bool and can be compared with the constants abap\_true and abap\_false without any problems.

-   If the logical expression is false, the result of boolc fulfills the condition [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)), since the returned blank is the type-dependent initial value at the same time.

-   The result of xsdbool cannot usually be converted directly using a [processing function](javascript:call_link\('abenprocess_functions.htm'\)) such as [translate](javascript:call_link\('abentranslate_functions.htm'\)), since the trailing blanks here are ignored in text fields of type c. The result of a false logical expression would be ignored. The result of the function boolc of type string is better suited for conversions of this type.

-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/TR/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool for whose argument a [predicative method call](javascript:call_link\('abenpredicative_method_call_glosry.htm'\) "Glossary Entry") is listed. The variable is then serialized to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry") and [asJSON](javascript:call_link\('abenasjson_glosry.htm'\) "Glossary Entry") using the predefined [identity transformation](javascript:call_link\('abenid_trafo_glosry.htm'\) "Glossary Entry") [ID](javascript:call_link\('abenabap_xslt_id.htm'\)). This produces the value true or false. After a comparison with the identically typed constant abap\_false, the formatted result of the serialization is either read or displayed.

The result would be quite different if boolc were used instead of xsdbool. First, the transformations would have a different result since the values "X" and " " are not transformed to true or false; second, the logical expression gui\_flag = abap\_false would always be false, since abap\_false loses its blank when converting to the type string.

DATA(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML DATA(xml).
DATA(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
DATA(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Date and Time Processing / Time Stamps / Time Stamp Field with Time Stamp Type

**Files**: 14 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Date and Time Processing / System Fields for Date and Time

Included pages: 2



**📖 Source**: [abenboole_functions.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_functions.htm)

### abentime_system_fields.htm

> **📖 Official SAP Documentation**: [abentime_system_fields.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) → 

System Fields for Date and Time

The following table shows the [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](javascript:call_link\('abenuser_date_glosry.htm'\) "Glossary Entry")

X

sy-datum

d

\-

[System date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry")

X

sy-dayst

c

1

Flag for daylight saving time in the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry"). During daylight saving time, "X", otherwise " ".

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry"). "1" for Monday, ..., "5" for Friday.

\-

sy-timlo

t

\-

[User time](javascript:call_link\('abenuser_time_glosry.htm'\) "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") reference time in seconds, ignoring daylight saving time.

\-

sy-uzeit

t

\-

[System time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") is sent, and when the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is changed. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](javascript:call_link\('abapget_time.htm'\)).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](javascript:call_link\('abensystem_user_time_zones.htm'\)). The local values of sy-datlo and sy-timlo that are related to the user time zone are determined from the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and the [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") is the same as the [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry"), the corresponding system fields for system date and user date or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](javascript:call_link\('abapget_time.htm'\))



**📖 Source**: [abentime_system_fields.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm)

### abapget_time.htm

> **📖 Official SAP Documentation**: [abapget_time.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_time.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Date and Time Processing](javascript:call_link\('abendate_time_processing.htm'\)) →  [System Fields for Date and Time](javascript:call_link\('abentime_system_fields.htm'\)) → 

GET TIME

[Short Reference](javascript:call_link\('abapget_time_shortref.htm'\))

Syntax

GET TIME *\[*FIELD tim*\]*.

Addition:

[... FIELD tim](#!ABAP_ONE_ADD@1@)

Effect

Without the addition FIELD, the [system fields for date and time](javascript:call_link\('abentime_system_fields.htm'\)), sy-datlo, sy-datum, sy-timlo, and sy-uzeit, are set to the current value. The content of the system fields sy-dayst, sy-fdayw, sy-tzone, and sy-zonlo is not updated.

Hint

Except for GET TIME, the system fields are updated after a program is started, a [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") is sent, and the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is changed.

Example

Approximate runtime measurement. The statement [GET RUN TIME](javascript:call_link\('abapget_run_time.htm'\)) should be used instead.

GET TIME.
DATA(t1) = sy-timlo.
DO 5000000 TIMES.
ENDDO.
GET TIME.
DATA(t2) = sy-timlo.
cl\_demo\_output=>display( t2 - t1 ).

Addition

... FIELD tim

Effect

The addition FIELD is used to pass the current [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") in the format "hhmmss" to the variable tim instead of sy-uzeit and none of the system fields are updated. The return value of the statement has the data type t. The following can be specified for tim:

-   An existing variable of the data type t or a variable to which the type t can be converted.

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type t is declared.
    

Example

The example has the same function as the previous example.

GET TIME.
DO 5000000 TIMES.
ENDDO.
GET TIME FIELD DATA(time).
cl\_demo\_output=>display( time - sy-uzeit ).


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2



**📖 Source**: [abapget_time.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_time.htm)

### abenobsolete_typing.htm

> **📖 Official SAP Documentation**: [abenobsolete_typing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_typing.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](javascript:call_link\('abenlike_obsolete.htm'\))

Continue
[LIKE, obsolete](javascript:call_link\('abenlike_obsolete.htm'\))



**📖 Source**: [abenobsolete_typing.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_typing.htm)

### abenlike_obsolete.htm

> **📖 Official SAP Documentation**: [abenlike_obsolete.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlike_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenlike_obsolete.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlike_obsolete.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Type Reference](javascript:call_link\('abenobsolete_typing.htm'\)) → 

LIKE, obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can be used to reference [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structures in [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") and their components, as well as the properties of data objects. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](javascript:call_link\('abaptypes.htm'\)), [DATA](javascript:call_link\('abapdata.htm'\)), and so on.

-   in [complete typings](javascript:call_link\('abentyping_complete.htm'\))

-   in the statement [PARAMETERS](javascript:call_link\('abapparameters_type.htm'\))

If there is a data object called dtype in a local context, then this object hides the data type from ABAP Dictionary.

Hints

-   The addition LIKE should only be used to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") entity. It is possible, however, to make a LIKE reference to a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.


---
