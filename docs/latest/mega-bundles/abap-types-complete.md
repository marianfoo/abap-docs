# ABAP TYPES - Complete Reference (latest)

**Generated**: 2025-09-01T19:38:56.019Z
**Bundles Combined**: 14
**Category**: types

---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Data Elements

**Files**: 7 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Data Elements

Included pages: 7


### abenddic_data_elements.htm

---
title: "DDIC - Data Elements"
description: |
  A DDIC data element(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm 'Glossary Entry') defines an elementary data type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm 'Glossary Entry') or a reference
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm"
abapFile: "abenddic_data_elements.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "elements"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Data%20Elements%2C%20ABENDDIC_DATA_ELEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Data Elements

A [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry") defines an [elementary data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_type_glosry.htm "Glossary Entry"). DDIC data elements describe the technical type properties and the semantic meaning of an object that is defined with reference to the data element. Data elements are the elementary components of complex types such as [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), [DDIC table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm), or [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm). An object which is declared program-internally with reference to a data element always has one of the elementary built-in ABAP types. The type in question is defined by the mapping of the [built-in types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary to ABAP types.

-   [Technical properties of data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_tech.htm)
-   [Semantic properties of data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm)

Hints

-   [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") offer [CDS simple types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") for defining [elementary data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") natively in ABAP CDS. CDS simple types can be enriched with semantic information using [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry"). This semantic information is evaluated by frameworks such as the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarap_glosry.htm "Glossary Entry") when a simple type is used for typing. Moreover, simple types can be nested within each other and therefore offer advanced reuse capabilities compared to DDIC data elements.
-   The technical properties of a data element can be defined either directly or by using a reusable [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm). This is why the concept is known as a two-level domain concept.
-   The name of a data element must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm).
-   Data elements can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) and in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Properties of Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_tech.htm)
[DDIC - Semantic Properties of Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm)
[DDIC - Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm)


### abenddic_data_elements_tech.htm

---
title: "DDIC - Technical Properties of Data Elements"
description: |
  A data element describes an elementary data type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm 'Glossary Entry') or a reference type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_type_glosry.htm 'Glossary Entry
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_tech.htm"
abapFile: "abenddic_data_elements_tech.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddic", "elements", "tech"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Technical%20Properties%20of%20Data%20Elements%2C%20ABENDDIC_DATA_ELEMENTS_TECH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

DDIC - Technical Properties of Data Elements

A data element describes an [elementary data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_type_glosry.htm "Glossary Entry") with the following technical properties:

-   Elementary type
    
    A data element that describes an elementary type has a [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) from the ABAP Dictionary, a length, and, if necessary, a number of decimal places as its technical properties. These technical properties are defined either directly in the data element or they are inherited from a [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm).
    
-   Reference type
    
    A data element that describes a reference type is either a type for a [data reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or for an [object reference variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry").
    
    -   The [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") for a data reference variable is either the generic type DATA, any existing data type from the ABAP Dictionary (including [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) or [views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm)), or a directly specified [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
    -   The [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") for an object reference variable is either the generic type OBJECT or an existing global class or a global interface from the [class library](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclass_library_glosry.htm "Glossary Entry").

Hints

-   When existing data elements are modified, all consumers of the data element are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm) necessary.
-   Global reference types from the ABAP Dictionary can be used for typing in ABAP programs. They cannot, however, be used for fields of database tables or for elements of CDS entities.

Example

The data element S\_CONN\_ID inherits its technical properties (data type NUMC, length 4) from the domain S\_CONN\_ID. The data element S\_CONN\_ID has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic properties, such as the column CONNID of the DDIC database tables SPFLI, SBOOK, and SFLIGHT.


### abenddic_data_elements_sema.htm

---
title: "DDIC - Semantic Properties of Data Elements"
description: |
  The semantic properties of data elements are mainly significant when they are used as types of fields on user interfaces such as dynpro(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm 'Glossary Entry') or Web Dynpro(https://help.sap.com/doc/abapdocu_latest_i
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements_sema.htm"
abapFile: "abenddic_data_elements_sema.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "elements", "sema"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Semantic%20Properties%20of%20Data%20Elements%2C%20ABENDDIC_DATA_ELEMENTS_SEMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

DDIC - Semantic Properties of Data Elements

The semantic properties of data elements are mainly significant when they are used as types of fields on user interfaces such as [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") or [Web Dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"). The only exceptions to this are the default component name and the flag for the change document. ABAP data objects declared with reference to a data element ignore the semantic properties of the data element.

-   Short text
    
    Short text of the data element. The short text of a data element appears as a header in a [field help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_help_glosry.htm "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element.
    
-   Field label
    
    The short, medium, and long field labels assigned to a data element, as well as the header, can be used on screens of dynpros or Web Dynpros as descriptions or column names for fields defined with direct or indirect reference to a data element. A user-defined maximum length, which has varying upper limits for the different field labels, must be set. It applies to all languages.
    
-   Documentation
    
    Documentation of the data element. The documentation created for a data element appears by default as [field help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_help_glosry.htm "Glossary Entry") for all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element. If no documentation was created, only the short text appears.
    
-   Supplementary documentation
    
    A data element can have supplementary documentation objects, with each documentation object identified by a four-digit number. This supplementary documentation can be used for program-specific and dynpro-specific [field helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynp_field_help.htm). The assignment of supplementary documentation to a dynpro field is stored in the DDIC database table THLPF.
    
-   Documentation status
    
    The status of the documentation for a data element can be noted as follows for any check tools:
    
    -   Object is documented
        
        The default setting, indicating that the data element has documentation.
        
    -   Object not used on a screen
        
        The data element is not intended for screen fields of dynpro fields or Web Dynpro fields and no documentation is required.
        
    -   Object is documented by its short text.
        
        The short text provides enough documentation.
        
    -   Documentation is currently on hold
        
        The data element requires documentation, but it does not yet exist.
        
-   Search help
    
    A data element with an elementary data type can be assigned a [search help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") and a parameter can be passed to this search help.
    
    This search help is used for the [input help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_help_glosry.htm "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element, unless the dynpro field is itself linked with a search help. Search helps cannot be assigned to a data element with a reference type.
    
-   SPA/GPA parameter
    
    A data element with an elementary data type can be linked with an [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspa_gpa.htm).
    
    Dynpro fields defined with direct or indirect reference to the data element can be filled with the content of the parameter, unless the dynpro field is itself linked with an SPA/GPA parameter. A data element with a reference type cannot be linked with an SPA/GPA parameter.
    
-   Flag for input history
    
    The flag for the input history defines whether the input history in SAP GUI is active for dynpro fields defined with direct or indirect reference to the data element. This makes it possible to switch the input history off for sensitive fields.
    
-   Flag for bidirectional fonts
    
    These flags define the behavior of dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element when handling bidirectional fonts (such as Hebrew or Arabic).
    
    -   Writing direction
        
        This flag can specify the writing direction of a dynpro field as from left to right, which overwrites the direction from right to left specified by logons in a bidirectional font. This flag can be useful for fields with numeric texts.
        
    -   BIDI filter
        
        This flag can be used to prevent the Unicode formatting characters that affect the writing direction of bidirectional fonts in data transports between GUI and AS ABAP from being filtered out, regardless of the global system settings. The global system setting is made in the program I18N\_SET\_DATAELEMENT\_FLAGS.
        
-   Default component name
    
    The default component name of a data element is a naming suggestion for structure components or table fields defined with reference to this data element. Structures used in APIs in particular should follow this proposal.
    
-   Flag for change document
    
    The flag for change documents specifies whether changes to fields in DDIC database tables defined with reference to this data element are logged when change document objects are involved. A change document object groups multiple tables and is used to generate function modules that can be integrated into ABAP programs and that log changes. This flag cannot be set for data elements with a reference type.
    
-   Further semantic properties can be defined in the [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) referenced by a data element.

The texts in the semantic properties (the short text, field labels, and documentation) are, like all AS ABAP texts, connected to the translation tools.

Hint

Consumers must consider that many semantic properties of a data element define the behavior of dynpro fields or Web Dynpro fields. For example, a data element whose documentation describes the internal properties of a technical type is not usually suitable for use in UI fields. One example are the data elements SYST\_... that define the components of the system structure SYST. The documentation of these data elements describes the corresponding system fields and should not appear on a UI. Ideally, separate data elements with different semantic properties are created for UIs, use in programs, and DDIC database tables. Any data elements not used for UI fields do not usually require semantic properties except for the short text and possibly documentation if the short text is not sufficient. Conversely, properties such as the flag for change documents are not relevant for data elements for UIs.


### abenddic_domains.htm

---
title: "DDIC - Domains"
description: |
  A DDIC domain(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm 'Glossary Entry') is a standalone dictionary object that defines technical and semantic properties of elementary data types. Data elements(https://help.sap.com/doc/abapdocu_latest_index_htm/latest
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm"
abapFile: "abenddic_domains.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "domains"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Domains%2C%20ABENDDIC_DOMAINS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Domains

A [DDIC domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm "Glossary Entry") is a standalone dictionary object that defines technical and semantic properties of elementary data types. [Data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) can be defined with reference to a domain and inherit the properties defined there. Domains can only be used in DDIC data elements. A domain can be used by any number of data elements.

-   [Technical properties of domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_tech.htm)
-   [Semantic properties of domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm)

The name of a domain must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains should not occur within an application component or a package. Domains that only have technical properties should be created as reusable domains in central basis packages. One example is the domain CHAR255.
-   The [fixed values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as special kinds of literals in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   As of ABAP release 7.58, [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") offer [CDS enumerated types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_type_glosry.htm "Glossary Entry") for defining [enumerated data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry") natively in ABAP CDS. CDS enumerated types provide functionality similar to domains with [fixed values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_value_glosry.htm "Glossary Entry") and are recommended when working with data models in ABAP CDS.
-   A domain determines properties of an elementary data type but is not a data type itself. A domain cannot be specified after a TYPE addition in ABAP.
-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) and in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Properties of Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_tech.htm)
[DDIC - Semantic Properties of Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm)


### abenddic_domains_tech.htm

---
title: "DDIC - Technical Properties of Domains"
description: |
  The only technical property of a domain is the description of an elementary data type whose following technical properties are defined directly in the domain: -   Built-in data type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary -
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_tech.htm"
abapFile: "abenddic_domains_tech.htm"
keywords: ["do", "if", "data", "types", "abenddic", "domains", "tech"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Technical%20Properties%20of%20Domains%2C%20ABENDDIC_DOMAINS_TECH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

DDIC - Technical Properties of Domains

The only technical property of a domain is the description of an elementary data type whose following technical properties are defined directly in the domain:

-   [Built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary
-   Length
-   A number of decimal places (optional)

Hint

When existing domains are modified, all users of the domain are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for the fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm) necessary.


### abenddic_domains_sema.htm

---
title: "DDIC - Semantic Properties of Domains"
description: |
  Domains can have the following semantic properties: -   Short text A descriptive short text must be specified when a domain is created. -   Documentation Documentation can optionally be assigned. This documentation can be read as required. -   Output properties The output properties affect how field
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm"
abapFile: "abenddic_domains_sema.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenddic", "domains", "sema"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Semantic%20Properties%20of%20Domains%2C%20ABENDDIC_DOMAINS_SEMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Semantic Properties of Domains

Domains can have the following semantic properties:

-   Short text
    
    A descriptive short text must be specified when a domain is created.
    
-   Documentation
    
    Documentation can optionally be assigned. This documentation can be read as required.
    
-   Output properties
    
    The output properties affect how fields defined with reference to a data element that references the domain are displayed on [dynpros or Web Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") or when formatted with the statements [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm).
    
    -   Output length
        
        The optional output length overrides the [implicit output length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_output_length.htm) as assigned to the built-in elementary data types. The possible output length is determined by the data type and is checked by the ABAP Dictionary [tools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm). If a format is assigned to the built-in data type used, the output length should be long enough for all formatting characters.
        
    -   Output style
        
        A domain with the type of a decimal floating point number must be assigned an [output style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_decimal_floating_point.htm).
        
    -   Conversion exit
        
        If a domain is assigned to a [conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry"), the associated [conversion routine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_routine_glosry.htm "Glossary Entry") (function module) ...\_INPUT for each input in a [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") and ...\_OUTPUT for each output using a dynpro field that is defined with reference to a data element that itself references the domain is called. The function module ...\_OUTPUT is executed when a data object is formatted using [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) when the data object in question is declared with reference to a data element that itself references the domain.
        
    -   Sign
        
        If a [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") has a numeric DDIC data type, the Sign property must be set so that negative numbers can be displayed on the screen. This property can only be specified using a domain.
        
    -   Lowercase letters
        
        If a [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") has a character-like DDIC data type, the Lowercase Letters property can be set so that these letters are not transformed to uppercase. This property can only be specified using a domain.
        
    -   Time format
        
        For the data type [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), a 24-hour or 12-hour format can be set for displaying dynpro fields in accordance with the ABAP [time formats](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_formats.htm).
        
-   Value range
    
    Value ranges for fields on user interfaces can be defined for domains of the [built-in types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) CHAR, NUMC, DEC, INT1, INT2, INT4, and INT8. For domains of the types CHAR and NUMC, this range specifies the valid input values in dynpro fields defined with reference to a data element of such a domain. The value range is evaluated for all types for the [input help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninput_help_glosry.htm "Glossary Entry") of [dynpro fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of DDIC database table fields that reference a data element with a domain of this type. A value range can be defined using the following:
    
    -   Fixed values
    -   Intervals
    
    Fixed values and intervals can be combined in any way. The following can be specified as fixed values and interval limits:
    
    -   Alphanumeric characters including blanks and special characters for the type CHAR. The length is restricted to 10.
    -   Positive integers (including 0) for the types NUMC, INT1, INT2, INT4, INT8, and DEC within the [value range](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) defined by the technical properties.
    
    A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special kinds of [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm) in a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The fixed values provided by SAP can be extended by customers or partners using [fixed value appends](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_fixed_value_appends.htm).
    
-   Value table
    
    A value table can be a DDIC database table that is used as a default for the [check table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_checktab.htm) in cases where a table field of a DDIC database table that references a data element with this domain is included in a [foreign key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkey.htm). Specifying a value table alone does not trigger a check.
    

Example

The domain S\_CLASS with the type CHAR describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values C (Business Class), F (First Class), and Y (Economy Class). This means that only the values C, F, and Y can be entered for all dynpro fields that refer to this domain.


### abenddic_domains.htm

---
title: "DDIC - Domains"
description: |
  A DDIC domain(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm 'Glossary Entry') is a standalone dictionary object that defines technical and semantic properties of elementary data types. Data elements(https://help.sap.com/doc/abapdocu_latest_index_htm/latest
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm"
abapFile: "abenddic_domains.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "domains"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Domains%2C%20ABENDDIC_DOMAINS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Domains

A [DDIC domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm "Glossary Entry") is a standalone dictionary object that defines technical and semantic properties of elementary data types. [Data elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) can be defined with reference to a domain and inherit the properties defined there. Domains can only be used in DDIC data elements. A domain can be used by any number of data elements.

-   [Technical properties of domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_tech.htm)
-   [Semantic properties of domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm)

The name of a domain must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains should not occur within an application component or a package. Domains that only have technical properties should be created as reusable domains in central basis packages. One example is the domain CHAR255.
-   The [fixed values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as special kinds of literals in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   As of ABAP release 7.58, [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") offer [CDS enumerated types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_enum_type_glosry.htm "Glossary Entry") for defining [enumerated data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry") natively in ABAP CDS. CDS enumerated types provide functionality similar to domains with [fixed values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_value_glosry.htm "Glossary Entry") and are recommended when working with data models in ABAP CDS.
-   A domain determines properties of an elementary data type but is not a data type itself. A domain cannot be specified after a TYPE addition in ABAP.
-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) and in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Properties of Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_tech.htm)
[DDIC - Semantic Properties of Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains_sema.htm)


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Technical Properties of Structures

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Technical Properties of Structures

Included pages: 2


### abenddic_structures_tech.htm

---
title: "DDIC - Technical Properties of Structures"
description: |
  A DDIC structure describes a structure type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructured_type_glosry.htm 'Glossary Entry') that consists of components and has the following technical properties: -   Component name The name of a component can have a maximum of 30 c
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm"
abapFile: "abenddic_structures_tech.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenddic", "structures", "tech"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Technical%20Properties%20of%20Structures%2C%20ABENDDIC_STRUCTURES_TECH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

DDIC - Technical Properties of Structures

A DDIC structure describes a [structure type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructured_type_glosry.htm "Glossary Entry") that consists of components and has the following technical properties:

-   Component name
    
    The name of a component can have a maximum of 30 characters, can consist of only letters, numbers, and underscores, and must start with a letter or a [namespace prefix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"). The following restrictions apply:
    
    -   A component name cannot be the name of the [pseudo component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line reserved in ABAP.
    -   If a structure is to be included in a [database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), the components must not be given any of the reserved names that are forbidden in DDIC database tables.
-   Component type
    -   For elementary components, the technical properties ( [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), length, and any decimal places) are defined with reference to a [data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) for an elementary DDIC type or directly in the structure component. In the case of [DDIC currency fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field_glosry.htm "Glossary Entry") and [DDIC quantity fields,](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_quantity_glosry.htm "Glossary Entry") a [reference field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) must be specified for the unit.
    -   For reference-like components, the technical properties are defined using a reference to a [data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) that describes a reference type or defined directly in the structure component. When specified directly, data references can be defined by reference to any DDIC data type or to the generic type DATA. Object references can be defined by reference to classes or interfaces in the class library or to the generic type OBJECT,
    -   Substructures are defined by reference to [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), or [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm). A substructure can be defined as a [static box](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_box_glosry.htm "Glossary Entry"). In ABAP data objects declared with reference to the DDIC structure, a static box supports [initial value sharing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").
    -   Tabular components are defined by reference to a [DDIC table type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_types.htm).
-   Enhancement category
    
    The [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm) of a structure specifies how a structure can be extended using [customizing includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry") or [append structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry") and affects how ABAP programs that work with data objects of this structure type are checked.
    
-   Activation type
    
    An [activation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_act_type.htm) can be defined for a structure, like for DDIC database tables, but has no specific use here.
    

Hints

-   In ABAP, the component names of structures are not strictly speaking a [technical type property](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry"). They are listed here however to simplify the picture.
-   The above rules for component names are checked strictly by the ABAP Dictionary only for table fields of DDIC database tables and not for structures. Component names of structures can contain special characters such as a colon : that prevent the component from being addressed in an ABAP program. For this reason, only those component names should be used that comply with the above rules.
-   A substructure cannot be defined using a reference to a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), nor using a reference to a [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The latter has been possible before, but since ABAP release 7.56, access to CDS-managed DDIC views is [obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_obsolete.htm).

Continue
[DDIC - Enhancement Category of Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm)


### abenddic_structures_enh_cat.htm

---
title: "DDIC - Enhancement Category of Structures"
description: |
  DDIC structures and DDIC database tables that are delivered by SAP can be extended using customizing includes(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm 'Glossary Entry') or append structures(https://help.sap.com/doc/abapdocu_latest_index_h
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm"
abapFile: "abenddic_structures_enh_cat.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenddic", "structures", "enh", "cat"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Technical Properties of Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Enhancement%20Category%20of%20Structures%2C%20ABENDDIC_STRUCTURES_ENH_CAT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Enhancement Category of Structures

DDIC structures and DDIC database tables that are delivered by SAP can be extended using [customizing includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry") or [append structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry").

These types of changes cause problems if the extensions change the [structure fragment view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry"). For this reason, DDIC structures and DDIC database tables are classified in order to be able to recognize and handle problems related to structure extensions. This classification is used in the program check to create a warning at all positions where the program works with structures, and where later structure extensions could cause syntax errors or changed program behavior. When a structure or a DDIC database table is defined in the ABAP Dictionary, the enhancement categories shown in the following table can be used as a classification.

Level

Category

Meaning

1

Not classified

The structure does not have an enhancement category.

2

Cannot be enhanced

The structure must not be extended.

3

Can be enhanced (character-like)

All structure components and their extensions must be character-like and flat.

4

Can be enhanced (character-like or numeric)

All structure components and their extensions must be flat.

5

Can be enhanced (deep)

All structure components and their extensions can have any data type.

The warnings from the program check are classified into three levels, depending on the effects of the allowed structure extensions:

Level

Type of Check

Meaning

A

Syntax check

An extension that completely exhausts the enhancement category of the affected structure produces a syntax error.

B

Extended check

Permitted extensions can produce syntax errors, but not always.

C

Extended check

Permitted extensions cannot produce syntax errors, although changes to program behavior do cause semantic problems.

Example

If the structure ddic\_struc in the ABAP Dictionary is defined only with [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") components but is classified as Can be enhanced (deep), the following program section produces a warning in the syntax check. If the structure were to be extended by a [deep](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeep_glosry.htm "Glossary Entry") component after the program was delivered, the program would have incorrect syntax and would no longer be executable. In this case, therefore either the structure ddic\_struc must be classified in the ABAP Dictionary as Can be enhanced (character-like) or else the offset/length cannot be specified in the program.

DATA: my\_struc TYPE ddic\_struc,
      str TYPE string,
      off  TYPE i,
      len TYPE i.
...
str = my\_struc+off(len).


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Dictionary DDL for Structure Definitions / DDIC DDL - DEFINE STRUCTURE

**Files**: 10 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Structures / DDIC - Dictionary DDL for Structure Definitions / DDIC DDL - DEFINE STRUCTURE

Included pages: 10


### abenddicddl_define_structure.htm

---
title: "DDIC DDL - DEFINE STRUCTURE"
description: |
  Syntax structure_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) ext_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm) DEFINE STRUCTURE struct  ... component;(https://help.sap.co
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm"
abapFile: "abenddicddl_define_structure.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenddicddl", "define", "structure"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20ABENDDICDDL_DEFINE_STRUCTURE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - DEFINE STRUCTURE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm)
[ext\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
DEFINE STRUCTURE struct {
  ...
  [component;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm)
  ...
  [include;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) struct in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

-   A structure is defined using the statement DEFINE STRUCTURE. The name struct is subject to the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm).
-   [Annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_annotation_glosry.htm "Glossary Entry") [structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) in front of the statement DEFINE STRUCTURE define the mandatory structure properties.
-   Optionally, extensibility annotations [ext\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm) can be specified in front of the statement DEFINE STRUCTURE. These annotations are a prerequisite for [C0 release of a DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm).
-   The structure components are defined in a semicolon-separated list in curly brackets { } by one of the following methods:
    -   Defining individual components [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm)
    -   Including include structures [include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm)

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm), an ABAP Dictionary structure definition can contain comments after // and between /\* ... \*/.
-   A more detailed description of the syntax is available in the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Definition of the structure DEMOFLI in ADT.

@EndUserText.label : 'Structure for ALV Demo'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
define structure demofli {
  fldate   : s\_date;
  seatsmax : s\_seatsmax;
  seatsocc : s\_seatsocc;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm)
[DDIC DDL - DEFINE STRUCTURE, ext\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm)
[DDIC DDL - DEFINE STRUCTURE, component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm)
[DDIC DDL - DEFINE STRUCTURE, include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm)


### abenddicddl_define_struct_props.htm

---
title: "Syntax"
description: |
  @EndUserText.label : '...' @AbapCatalog.enhancement.category : enh_cat Effect Mandatory annotations for specifying structure properties in the definition of a DDIC structure using the statement DEFINE STRUCTURE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_str
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm"
abapFile: "abenddicddl_define_struct_props.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddicddl", "define", "struct", "props"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20structure_annos%2C%20ABENDDICDDL_DEFINE_STRUCT_PROPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

DDIC DDL - DEFINE STRUCTURE, structure\_annos

Syntax

@EndUserText.label : '...'
@AbapCatalog.enhancement.category : enh\_cat

Effect

Mandatory annotations for specifying structure properties in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   @EndUserText.label defines the [short text of the structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) in its original language in quotation marks.
-   @AbapCatalog.enhancement.category defines the [enhancement category of the structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm). The following can be specified for enh\_cat:
    -   #NOT\_CLASSIFIED - [Not classified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm)
    -   #NOT\_EXTENSIBLE - [Cannot be enhanced](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm)
    -   #EXTENSIBLE\_CHARACTER - [Can be enhanced (character-like)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm)
    -   #EXTENSIBLE\_CHARACTER\_NUMERIC - [Can be enhanced (character-like or numeric)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm)
    -   #EXTENSIBLE\_ANY - [Can be enhanced (deep)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm)

Hints

-   The specification #NOT\_CLASSIFIED is only intended for displaying existing structures of this property. Any new or modified structures should always have an enhancement category.
-   The syntax used to specify the properties is similar to [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry"). There are, however, no associated [annotation definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").
-   The same annotations must also be specified in the definition of a DDIC database table using [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) and an append structure using [EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm).


### abenddicddl_define_ext_annos.htm

---
title: "Syntax"
description: |
  @AbapCatalog.enhancement.fieldSuffix: 'suffix' @AbapCatalog.enhancement.quotaMaximumFields: integer @AbapCatalog.enhancement.quotaMaximumBytes: integer @AbapCatalog.enhancement.quotaShareCustomer: integer @AbapCatalog.enhancement.quotaSharePartner: integer Effect The following annotations are requir
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm"
abapFile: "abenddicddl_define_ext_annos.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "ext", "annos"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20ext_annos%2C%20ABENDDICDDL_DEFINE_EXT_ANNOS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC DDL - DEFINE STRUCTURE, ext\_annos

Syntax

@AbapCatalog.enhancement.fieldSuffix: 'suffix'
@AbapCatalog.enhancement.quotaMaximumFields: integer
@AbapCatalog.enhancement.quotaMaximumBytes: integer
@AbapCatalog.enhancement.quotaShareCustomer: integer
@AbapCatalog.enhancement.quotaSharePartner: integer

Effect

The following annotations are required for [C0 release of a DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm). They are evaluated only in the context of [C0 release](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_glosry.htm "Glossary Entry") for [developer extensibility](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendev_extensibility_glosry.htm "Glossary Entry").

-   @AbapCatalog.enhancement.fieldSuffix defines a 3-character element suffix suffix. This suffix is to be used for all fields of an extension created by customers or partners from a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry"). The purpose is to avoid field naming clashes. The following rules apply:
    -   suffix must consist of exactly 3 alphabetical characters \[A-Z\].
    -   If the object is a partner or customer object, the suffix must begin with Y or Z.
    -   If the object is an SAP object, the suffix must not begin with Y or Z.
    -   Field suffixes should be unique. If the specified field suffix is already registered by a different development object, a syntax check warning occurs.
-   @AbapCatalog.enhancement.quotaMaximumFields defines the maximum number of fields that can be appended to the corresponding object by customers and partners. In other words, it reserves a field count for customer and partner extensions.
    
    The annotation value integer must be an integer between 0 and 1000. A value between 100 and 560 is recommended. Otherwise, a syntax check warning occurs.
    
    The sum of fields of the original object and reserved fields must not exceed the technical limitations of the object in question. Current technical limitations are:
    
    -   DDIC database table that is part of the software component SAP\_BASIS: 750 fields.
    -   DDIC database table, [storage type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_storage.htm) Row Store: 1000 fields.
    -   DDIC database table, storage type Column Store: 1500 fields.
    -   DDIC structure: 9999 fields.
-   @AbapCatalog.enhancement.quotaMaximumBytes defines the maximum byte capacity that can be appended to the corresponding object by customers and partners. In other words, it reserves a byte capacity for customer and partner extensions. The annotation value integer must be an integer. The sum of bytes of the original object and reserved bytes must not exceed the technical limitation of 2 to the power of 19 minus 1 bytes (2^19-1). The recommended number of reserved bytes is between 1.000 and 56.000 bytes per structure.
-   @AbapCatalog.enhancement.quotaShareCustomer assigns a percentage of the defined field count and byte capacity to customer extensions. The annotation value integer can be an integer between 0 and 100. The customer quota share and the partner quota share must together add up to 100.
    
    Caution: Currently, a quota share of 50 is enforced.
    
-   @AbapCatalog.enhancement.quotaSharePartner assigns a percentage of the defined field count and byte capacity to partner extensions. The annotation value integer can be an integer between 0 and 100. The customer quota share and the partner quota share must together add up to 100.
    
    Caution: Currently, a quota share of 50 is enforced.
    

Further Information

[C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm)

Hints

-   The same annotations can also be specified in the definition of a DDIC database table using [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) for C0 release of the database table in question.
-   Extensibility annotations of DDIC structures and DDIC database tables can only be maintained in [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). Maintenance in transaction SE11 is not supported.


### abenddicddl_define_struct_comps.htm

---
title: "DDIC DDL - DEFINE STRUCTURE, component"
description: |
  Syntax component_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm) foreign_key_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) geo_annos(https://help.sa
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm"
abapFile: "abenddicddl_define_struct_comps.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddicddl", "define", "struct", "comps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20component%2C%20ABENDDICDDL_DEFINE_STRUCT_COMPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

DDIC DDL - DEFINE STRUCTURE, component

Syntax

*\[*[component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm)*\]*
*\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm)*\]*
*\[*[geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm)*\]*
*\[*KEY*\]* comp : *{* *{*data\_element *\[* [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)*\]*
                             *\[*[foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm)*\]**}*
               *|*abap. [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)*\[*(n)*|*(n,m)*\]* *}*
           *|* *{* REFERENCE TO any\_type *}*
           *|* *{* struct *\[*BOXED*\]* *}*
           *|* *{* table\_type *}*
           *\[*NOT NULL*\]*;

Effect

Defines a single [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   Optional component properties can be specified using annotations [component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm).
-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm).
-   [geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm) specify properties of a component with the [geodata type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.
-   comp indicates the name of the component.
-   data\_element or abap.type is used to define an elementary component or a component with a reference type:
    -   data\_element can be used to specify an existing [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry"). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.
    -   abap.type*\[*(n)*|*(n,m)*\]* can be used to specify a built-in data type from the ABAP Dictionary and an elementary component of this type is defined. The prefix abap is mandatory and [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) indicates the type. n and m specify the length and number of decimal places, if required.
-   REFERENCE TO any\_type is used to define a reference type. For any\_type, the syntax abap.type*\[*(n)*|*(n,m)*\]* can be used to specify any existing data types from the ABAP Dictionary, classes or interfaces from the class library, the generic types DATA or OBJECT, or built-in types.
-   struct *\[*BOXED*\]* is used to define a substructure. DDIC structures, DDIC database tables, or DDIC views can all be specified for struct. BOXED can be used to define the substructure as a [static box](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_box_glosry.htm "Glossary Entry").
-   table\_type is used to define a tabular component. [Table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_type_glosry.htm "Glossary Entry") from the ABAP Dictionary can be specified for table\_type.
-   The additions KEY and NOT NULL can be used to define the component as a [key field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) and to set a [flag for initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm). The addition KEY has no effect when the structure is included in DDIC database tables. It must be used for structure components that are used as lock parameters of lock objects. The addition NOT NULL can be respected for structures that are included in DDIC database tables.
-   The addition [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.
-   The addition [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm) can be used to define a [foreign key dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") for a structure component whose data type is defined using a data element with elementary data type. This addition only makes sense for structures that are included in DDIC database tables.

Hint

The [activation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm) (relevant only for DDIC database tables) cannot be modified using DEFINE STRUCTURE.

Example

Definition of elementary components of the structure DEMO\_DAY with reference to built-in dictionary types. In the example for [include structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm), the structure is included more than once in another structure.

@EndUserText.label : 'Demo for include structure'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
define structure demo\_day {
  work : abap.char(8);
  free : abap.char(16); }

Continue
[DDIC DDL - DEFINE STRUCTURE, component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm)
[DDIC DDL - DEFINE STRUCTURE, value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)


### abenddicddl_define_struct_cmpprps.htm

---
title: "Syntax"
description: |
  @EndUserText.label : '...' @AbapCatalog.decfloat.outputStyle : style  @AbapCatalog.textLanguage  @Semantics.amount.currencyCode : 'struct.comp' @Semantics.quantity.unitOfMeasure : 'struct.comp' Effect Annotation for specifying optional properties of a compone
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm"
abapFile: "abenddicddl_define_struct_cmpprps.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "struct", "cmpprps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE, component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20component_annos%2C%20ABENDDICDDL_DEFINE_STRUCT_CMPPRPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

DDIC DDL - DEFINE STRUCTURE, component\_annos

Syntax

*\[*@EndUserText.label : '...'*\]*
*\[*@AbapCatalog.decfloat.outputStyle : style *\]*
*\[*@AbapCatalog.textLanguage *\]*
*\[*@Semantics.amount.currencyCode : 'struct.comp'*\]*
*\[*@Semantics.quantity.unitOfMeasure : 'struct.comp'*\]*

Effect

Annotation for specifying optional properties of a [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   In quotation marks, @EndUserText.label defines the [short text of the component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) in the original language of the structure.
-   @AbapCatalog.decfloat.outputStyle defines the [output style](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_decimal_floating_point.htm) of a decimal floating point number. style can be specified as:
    -   #NORMAL - default, mathematical or scientific, depending on space
    -   #SIGN\_RIGHT
    -   #SCALE\_PRESERVING
    -   #SCIENTIFIC
    -   #SCIENTIFIC\_WITH\_LEADING\_ZERO
    -   #SCALE\_PRESERVING\_SCIENTIFIC
    -   #ENGINEERING
-   @AbapCatalog.textLanguage - Flags a component of type LANG as [text language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dbtab_text_language.htm)
-   @Semantics.amount.currencyCode - Definition of a [reference field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) for a [currency field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field.htm). A component comp with the built-in dictionary type CUKY from the same or from a different structure struc must be specified in quotation marks.
-   @Semantics.quantity.unitOfMeasure - Definition of a [reference field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) for a [quantity field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_quantity_field.htm). A component comp with the built-in dictionary type UNIT from the same or from a different structure struc must be specified in quotation marks.

Hint

The syntax used to specify the properties is based on [CDS annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry"). There are, however, no visible associated [annotation definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry").

Example

Definition of the component weight\_unit as a reference field for the quantity field weight in the same structure.

...
define structure struct {
  ...
  @Semantics.quantity.unitOfMeasure : 'struct.weight\_unit'
  weight :      abap.quan(2);
  weight\_unit : abap.unit(2);
  ...
  }


### abenddicddl_define_struct_valuhelp.htm

---
title: "Syntax"
description: |
  ...  WITH VALUE HELP value_help WHERE parameter1 = structure.component1 AND parameter2 = structure.component2 ... ... Effect Assigns a search help(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm 'Glossary Entry') to a structure component(https:
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm"
abapFile: "abenddicddl_define_struct_valuhelp.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "struct", "valuhelp"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE, component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20value_help%2C%20ABENDDICDDL_DEFINE_STRUCT_VALUHELP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

DDIC DDL - DEFINE STRUCTURE, value\_help

Syntax

...  WITH VALUE HELP value\_help
       WHERE parameter1 = structure.component1
         *\[*AND parameter2 = structure.component2 ...*\]* ...

Effect

Assigns a [search help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") to a [structure component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) whose data type is defined by a data element with an elementary data type in the definition of a structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, value\_help is an existing search help in the ABAP Dictionary. All parameters of the search help must be linked with structure components after WHERE.

Hint

The addition WITH VALUE HELP can be used, with the same meaning, in the definition of a database using [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm).

Example

Definition of elementary components with reference to data elements and binds a search help to the second component.

...
define structure struct {
  comp1 : s\_carr\_id;
  comp2 : s\_conn\_id
    with value help demo\_f4\_field
      where carrid = struct.comp1
        and connid = struct.comp2;
  ...
  }


### abenddicddl_define_struct_comps.htm

---
title: "DDIC DDL - DEFINE STRUCTURE, component"
description: |
  Syntax component_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm) foreign_key_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) geo_annos(https://help.sa
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm"
abapFile: "abenddicddl_define_struct_comps.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenddicddl", "define", "struct", "comps"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20component%2C%20ABENDDICDDL_DEFINE_STRUCT_COMPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

DDIC DDL - DEFINE STRUCTURE, component

Syntax

*\[*[component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm)*\]*
*\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm)*\]*
*\[*[geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm)*\]*
*\[*KEY*\]* comp : *{* *{*data\_element *\[* [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)*\]*
                             *\[*[foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm)*\]**}*
               *|*abap. [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm)*\[*(n)*|*(n,m)*\]* *}*
           *|* *{* REFERENCE TO any\_type *}*
           *|* *{* struct *\[*BOXED*\]* *}*
           *|* *{* table\_type *}*
           *\[*NOT NULL*\]*;

Effect

Defines a single [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm) in the definition of a DDIC structure using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   Optional component properties can be specified using annotations [component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm).
-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) can be used to specify the properties of a foreign key dependency defined with [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm).
-   [geo\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_srprps.htm) specify properties of a component with the [geodata type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm "Glossary Entry") GEOM\_EWKB.
-   comp indicates the name of the component.
-   data\_element or abap.type is used to define an elementary component or a component with a reference type:
    -   data\_element can be used to specify an existing [DDIC data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_element_glosry.htm "Glossary Entry"). If the data element has an elementary data type, an elementary component is defined. If the data element has a reference type, the component is defined with this reference type.
    -   abap.type*\[*(n)*|*(n,m)*\]* can be used to specify a built-in data type from the ABAP Dictionary and an elementary component of this type is defined. The prefix abap is mandatory and [type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) indicates the type. n and m specify the length and number of decimal places, if required.
-   REFERENCE TO any\_type is used to define a reference type. For any\_type, the syntax abap.type*\[*(n)*|*(n,m)*\]* can be used to specify any existing data types from the ABAP Dictionary, classes or interfaces from the class library, the generic types DATA or OBJECT, or built-in types.
-   struct *\[*BOXED*\]* is used to define a substructure. DDIC structures, DDIC database tables, or DDIC views can all be specified for struct. BOXED can be used to define the substructure as a [static box](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_box_glosry.htm "Glossary Entry").
-   table\_type is used to define a tabular component. [Table types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_type_glosry.htm "Glossary Entry") from the ABAP Dictionary can be specified for table\_type.
-   The additions KEY and NOT NULL can be used to define the component as a [key field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) and to set a [flag for initial values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm). The addition KEY has no effect when the structure is included in DDIC database tables. It must be used for structure components that are used as lock parameters of lock objects. The addition NOT NULL can be respected for structures that are included in DDIC database tables.
-   The addition [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm) can be used to assign a search help to a structure component whose data type is defined using a data element with elementary data type.
-   The addition [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm) can be used to define a [foreign key dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") for a structure component whose data type is defined using a data element with elementary data type. This addition only makes sense for structures that are included in DDIC database tables.

Hint

The [activation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_tech.htm) (relevant only for DDIC database tables) cannot be modified using DEFINE STRUCTURE.

Example

Definition of elementary components of the structure DEMO\_DAY with reference to built-in dictionary types. In the example for [include structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm), the structure is included more than once in another structure.

@EndUserText.label : 'Demo for include structure'
@AbapCatalog.enhancement.category : #NOT\_EXTENSIBLE
define structure demo\_day {
  work : abap.char(8);
  free : abap.char(16); }

Continue
[DDIC DDL - DEFINE STRUCTURE, component\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_cmpprps.htm)
[DDIC DDL - DEFINE STRUCTURE, value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)


### abenddicddl_define_struct_incl.htm

---
title: "DDIC DDL - DEFINE STRUCTURE, include"
description: |
  Syntax group : INCLUDE struct WITH SUFFIX suffix ... extend(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm) ...; Effect Includes an include structure(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ab
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm"
abapFile: "abenddicddl_define_struct_incl.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "struct", "incl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20include%2C%20ABENDDICDDL_DEFINE_STRUCT_INCL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC DDL - DEFINE STRUCTURE, include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm) in the definition of a structure with the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   Any existing DDIC structure, DDIC database table, or DDIC view can be specified as struct.
-   group can be used to specify an optional name of a [group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm).
-   suffix can be used to specify an optional three-character [suffix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm).
-   A blank-separated list of additions, [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Hint

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) if the include structure is suitable for DDIC database tables.

Example

Syntax for defining the structure DEMO\_WEEK in ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm)


### abenddicddl_define_struct_comp_ext.htm

---
title: "DDIC DDL - DEFINE STRUCTURE, extend"
description: |
  Syntax ... foreign_key_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) EXTEND component :  value_help(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)  foreig
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm"
abapFile: "abenddicddl_define_struct_comp_ext.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "struct", "comp", "ext"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE, include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20extend%2C%20ABENDDICDDL_DEFINE_STRUCT_COMP_EXT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

DDIC DDL - DEFINE STRUCTURE, extend

Syntax

... *\[*[foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm)*\]*
    EXTEND component : *\[* [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm)*\]* *\[* [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm)*\]* ...

Effect

Defines component properties when [including](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm) include structures using the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The addition EXTEND can be specified for the every component component in the included [include structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm) and defines the following properties for this structure. If any of the properties of the included component already exist, they are overwritten.

-   [foreign\_key\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_fkprps.htm) - Properties of a foreign key relationship
-   [value\_help](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_valuhelp.htm) - Assignment to a search help.
-   [foreign\_key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table_forkey.htm) - Definition of a foreign key dependency.

At least one of the additions value\_help and foreign\_key must be specified.

Hint

The addition EXTEND can be used with the same meaning in the definition of a DDIC database table with [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) or an append structure with [EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm).

Example

Inclusion of a structure include\_struct in a structure struct, where EXTEND is used to assign a search help to the components comp1 and comp2.

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


### abenddicddl_define_struct_incl.htm

---
title: "DDIC DDL - DEFINE STRUCTURE, include"
description: |
  Syntax group : INCLUDE struct WITH SUFFIX suffix ... extend(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm) ...; Effect Includes an include structure(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/ab
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm"
abapFile: "abenddicddl_define_struct_incl.htm"
keywords: ["do", "if", "try", "data", "types", "abenddicddl", "define", "struct", "incl"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) →  [DDIC - Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) →  [DDIC - Dictionary DDL for Structure Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_structure.htm) →  [DDIC DDL - DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20STRUCTURE%2C%20include%2C%20ABENDDICDDL_DEFINE_STRUCT_INCL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC DDL - DEFINE STRUCTURE, include

Syntax

*\[*group :*\]* INCLUDE struct *\[*WITH SUFFIX suffix*\]*
                  *\[*...
                   [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm)
                   ...*\]*;

Effect

Includes an [include structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm) in the definition of a structure with the statement [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm) in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry").

-   Any existing DDIC structure, DDIC database table, or DDIC view can be specified as struct.
-   group can be used to specify an optional name of a [group](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm).
-   suffix can be used to specify an optional three-character [suffix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_include_structure.htm).
-   A blank-separated list of additions, [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm), can be used to overwrite the assignment to a search help and the definition of a foreign key dependency for each included component.

Hint

The addition INCLUDE can be used with the same semantics in the statement [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm) if the include structure is suitable for DDIC database tables.

Example

Syntax for defining the structure DEMO\_WEEK in ADT.

...
define structure demo\_week {
  monday    : include demo\_day with suffix \_mo;
  tuesday   : include demo\_day with suffix \_tu;
  wednesday : include demo\_day with suffix \_we;
  thursday  : include demo\_day with suffix \_th;
  friday    : include demo\_day with suffix \_fr;
}

Continue
[DDIC DDL - DEFINE STRUCTURE, extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm)


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Views

**Files**: 8 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Views

Included pages: 8


### abenddic_views.htm

---
title: "DDIC - Views"
description: |
  A DDIC view(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm 'Glossary Entry') is a grouping of columns of one or more DDIC database tables, resulting in an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm"
abapFile: "abenddic_views.htm"
keywords: ["select", "do", "if", "try", "method", "data", "types", "abenddic", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Views%2C%20ABENDDIC_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Views

A [DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry") is a grouping of columns of one or more DDIC database tables, resulting in an application-specific view. In AS ABAP, views are defined in ABAP Dictionary and can be referenced as data types in the same way as DDIC structures. Views can be used like DDIC database tables in reading ABAP SQL statements and, with some limitations, also in writing ABAP SQL statements. For this reason, the ABAP DDIC views are in the same namespace as all types of the ABAP Dictionary and hence in the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.

The name of a view must follow the [naming rules for DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_names.htm).

The data in a view is not saved physically. It is read from the database from the involved DDIC database tables.

-   Views can be used to restrict data access for a DDIC database table. Access to fields is restricted with projections and access to specific rows is restricted with selections.
-   Views that select from multiple DDIC database tables use joins or subqueries to join these tables and to read the required fields and rows.

The views in ABAP Dictionary are usually platform-independent. With some exceptions, the views in ABAP Dictionary are, when activated, transformed into platform-dependent [SQL views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_view_glosry.htm "Glossary Entry") in the current [standard AS ABAP database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry") in the [ABAP database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm "Glossary Entry"). This is done using the [DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_glosry.htm "Glossary Entry") statement CREATE VIEW with the addition AS SELECT, which formulates the corresponding SELECT statement. The definition of a view in the database can be displayed in transaction SE11 by choosing Utilities → Database Object.

ABAP Dictionary manages the following categories of views:

-   [DDIC table views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm)
    
    In DDIC table views the platform-dependent DDL statement is created from the definition of the view in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm).
    
-   [DDIC external views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_external_views.htm) (obsolete)
    
    A DDIC external view makes an [SAP HANA view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_view_glosry.htm "Glossary Entry") known in ABAP programs and makes it usable like a DDIC table view.
    
    Note: [SAP HANA XSA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsa_glosry.htm "Glossary Entry") replaces [SAP HANA XSC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsc_glosry.htm "Glossary Entry"). The access methods designed specifically for XSC objects are not suitable for XSA objects and have become obsolete. [DDIC external views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexternal_view_glosry.htm "Glossary Entry") represent one such access method and have been declared obsolete. See [SAP Note 3116165](https://launchpad.support.sap.com/#/notes/3116165) and [SAP Note 2465027](https://launchpad.support.sap.com/#/notes/2465027).
    

When a view is accessed using the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm), the database SELECT statement defined in the DDL statement is executed and the result set is returned as if a SELECT were executed on a DDIC database table whose structure matches the structure defined by the view.

Hints

-   Defining views is usually not the job of an ABAP application programmer, but is part of the implementation of data models in ABAP Dictionary. Once created, views are used in ABAP programs using ABAP SQL statements and must be stable enough to allow this.
-   The DDIC database tables a view is based on should have suitable [indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm). This is important for selections using views.
-   [ABAP Core Data Services (CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) offers [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry") and other [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") for the implementation of data models and replaces data modeling with DDIC views. CDS entities are defined in a (mostly) platform-independent [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") in [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry"). CDS entities offer advanced modeling capabilities compared to DDIC views.

Continue
[DDIC - Naming Rules for DDIC Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_names.htm)
[DDIC - Table Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm)


### abenddic_view_names.htm

---
title: "DDIC - Naming Rules for DDIC Views"
description: |
  The name of a view defined in the ABAP Dictionary must comply to the following rules: -   It can have a maximum of 16 characters. -   It must follow the naming rules for DDIC types(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm), -   It must follow the spe
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_names.htm"
abapFile: "abenddic_view_names.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "view", "names"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Naming%20Rules%20for%20DDIC%20Views%2C%20ABENDDIC_VIEW_NAMES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Naming Rules for DDIC Views

The name of a view defined in the ABAP Dictionary must comply to the following rules:

-   It can have a maximum of 16 characters.
-   It must follow the [naming rules for DDIC types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm),
-   It must follow the special [naming rules for DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_names.htm), with the exception, that it can always contain an underscore (\_) at the second or third position.
-   It is located in the namespace of the [data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) in ABAP Dictionary and by that the namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.


### abenddic_table_views.htm

---
title: "DDIC - Table Views"
description: |
  A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) in ABAP Workbench(https://help.sap.com/doc/abapdocu_la
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm"
abapFile: "abenddic_table_views.htm"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "try", "data", "types", "abenddic", "table", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Views%2C%20ABENDDIC_TABLE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table Views

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) in [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

The definition of a DDIC table view consists of the following:

-   Basis tables
    
    A list of DDIC database tables that are accessed by the view. Multiple tables are associated using joins.
    
-   View fields
    
    A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) can be assigned to a view field than used for the corresponding table field of the basis table. As a prerequisite, the type of the table field must be defined using a data element with a [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) and the new data element must reference the same domain. This makes it possible to adjust the semantic properties of the view field.
    
-   Key
    
    A key of the view that consists of key fields. The key is derived from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are automatically marked as key fields. All rows determined by the view must be unique with respect to the key. If no key can be identified, all fields of the view are key fields, which negatively impacts performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.
    
-   Join conditions
    
    Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the result is the cross product of both basis tables. Each row in a table is combined with each row of the other table. A join condition selects a subset of matching rows from the cross product.
    
-   Selection conditions
    
    Restrict the read rows to specific values of view fields or other fields.
    
    -   The possible comparison operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.
    -   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") can be specified for DDIC maintenance views and DDIC help views using SYST-... or SY-....
    -   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_view_glosry.htm "Glossary Entry") on the database:

-   [DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm)
-   [DDIC projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_projection_views.htm)
-   [DDIC maintenance views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_maintenance_views.htm)
-   [DDIC help views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_help_views.htm)

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Hints

-   To implement a projection, either DDIC database views or DDIC projection views can be used.
-   Only DDIC database tables can be specified as the basis tables of table views. Other views are not possible as basis object.
-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.
-   Views whose fields are all key fields should not be written to using [UPDATE FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) or [MODIFY FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.
-   As in DDIC database tables, the [client dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_dependency_glosry.htm "Glossary Entry") of a table view that can be accessed using ABAP SQL (a DDIC database view or a DDIC projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored.
-   Table views cannot be maintained using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").
-   [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP Core Data Services in [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry") offer all the functions of table views and more. CDS view entities allow only read access, however, while some DDIC views can be modified.

Continue
[DDIC - Database Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm)
[DDIC - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_projection_views.htm)
[DDIC - Maintenance Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_maintenance_views.htm)
[DDIC - Help Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_help_views.htm)


### abenddic_database_views.htm

---
title: "DDIC - Database Views"
description: |
  A DDIC database view defines a view on one or more basis tables. If there are multiple basis tables, they are joined using an inner join. An SQL view(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_view_glosry.htm 'Glossary Entry') is created as a database object(https://
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm"
abapFile: "abenddic_database_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "method", "data", "types", "abenddic", "database", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) →  [DDIC - Table Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Database%20Views%2C%20ABENDDIC_DATABASE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Database Views

A DDIC database view defines a view on one or more basis tables. If there are multiple basis tables, they are joined using an inner join. An [SQL view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_view_glosry.htm "Glossary Entry") is created as a [database object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_object_glosry.htm "Glossary Entry") on the database when the view is activated. The structure type defined using the view fields of the database view can be referenced in ABAP programs using TYPE. A database view can be accessed using [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"), [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry"), [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry"), [CDS views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry"), and also from outside AS ABAP using the programming interface of the database. The latter method is, however, [not recommended](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_access_recomm.htm).

-   [Basis Tables](#abenddic-database-views-1-------view-fields---@ITOC@@ABENDDIC_DATABASE_VIEWS_2)
-   [Join Conditions](#abenddic-database-views-3-------maintenance-status---@ITOC@@ABENDDIC_DATABASE_VIEWS_4)
-   [Table Buffering](#abenddic-database-views-5---hints------a-ddic-database-view-can-be-activated-in-abap-dictionary-without-its-basis-tables-being-defined-on-the-database--the-view-is-also-not-created-on-the-database-in-this-case------as-in-a--ddic-database-table--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-database-tables-client-htm---the-client-dependency-of-a-database-view-is-determined-by-a-column-with-the-built-in-dictionary-type-clnt--this-column-must-be-the-first-column-of-the-view-------ddic-append-views--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-append-views-htm--are-available-for-extending-ddic-database-views-delivered-by-sap-without-modifying-the-original-object------suitable--cds-views--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-view-glosry-htm--glossary-entry---can-be-defined-as--replacement-objects--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-replacement-objects-htm--for-database-views--in-this-case--reads-in--abap-sql--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenabap-sql-glosry-htm--glossary-entry---access-the-replacement-objects-rather-than-the-database-views------database-views-managed-by-abap-dictionary-should-not-be-accessed-directly-in-the-database--see--access-to-abap-managed-database-objects--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abendatabase-access-recomm-htm-----basis-tables-----the-basis-tables-of-database-views-can-be--transparent-tables--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abentransparent-table-glosry-htm--glossary-entry---and--global-temporary-tables--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenglobal-temporary-table-glosry-htm--glossary-entry-----view-fields-----the-view-fields-of-a-ddic-database-view-can-be-one-or-more-fields-from-the-basis-tables--an-include-mechanism-can-be-used-to-add-all-fields-from-a-basis-table--when-individual-fields-are-used--a-name-other-than-the-name-in-the-basis-tables-can-be-defined-for-a-view-field--this-name-can-have-a-maximum-of-30-characters--must-meet-the-naming-conventions-for-component-names-of--ddic-structures--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-structures-htm---and-cannot-be-a-reserved-name--the-reserved-names-that-cannot-be-used-are-specified-in-the-database-table-trese--fields-with-the-type-char-can-have-a-maximum-of-1333-characters--fields-with-the-type-lraw-or-lchr-must-be-at-the-end-of-the-view--only-one-such-field-is-allowed-per-view--furthermore--each-field-of-type-lraw-or-lchr-must-have-a-field-with-the-type-int2-or-int4-directly-in-front-of-it--the-value-of-this-integer-field-specifies-the-maximum-length-of-the-lraw-or-lchr-field---to-include-all-fields-from-a-basis-table-in-a-ddic-view--the-asterisk-character------can-be-used-instead-of-the-field-name--if-the-minus-character------is-used-for-individual-fields-of-a-basis-table-included-using-----all-fields-except-for-the-fields-specified-with----become-view-fields--if-the-structure-of-a-ddic-database-table-whose-fields-were-added-with----is-modified--the-structure-of-the-view-is-also-modified---hints------if-a--foreign-key-field--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenforeign-key-field-glosry-htm--glossary-entry---is-added-as-a-view-field--it-keeps-its-foreign-key-attribute-and-all-associated-foreign-key-fields-become-the-foreign-key-of-the-view------for--cds-managed-ddic-views--obsolete---https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-mngdddic-view-glosry-htm--glossary-entry------https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-v1-views-htm---the-view-fields-shown-as-key-fields-are-in-no-way-related-to-the-key-fields-defined-using--define-view--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-define-view-v1-htm--for-the--cds-entity--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-entity-glosry-htm--glossary-entry--------a-ddic-database-view-in-the-software-component-sap--basis-can-contain-a-maximum-of-750-view-fields-and-the-total-of-the-field-lengths--the-number-of-bytes-in-non-character-like-fields-plus-the-number-of-characters-in-flat-character-like-fields--must-not-exceed-4096--a-database-view-in-any-other-software-component-can-contain-a-maximum-of-1500-view-fields-and-the-total-of-the-field-lengths-is-not-checked-in-abap-dictionary---join-conditions-----the-join-conditions-for-an-inner-join-that-combines-two-basis-tables-can-be-formulated-using-equality-operators-between-any-two-table-fields-in-the-basis-tables--the-inner-join-joins-the-rows-of-the-basis-tables-in-question--the-result-set-contains-all-combinations-of-rows-whose-columns-meet-the-join-conditions--if-there-are-no-rows-in-the-basis-tables-that-meet-the-join-conditions--the-result-set-is-empty--if-there-is-a-suitable--foreign-key-dependency--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-database-tables-forkeyrel-htm---including-generic-and-constant-foreign-keys--between-two-basis-tables--this-dependency-can-be-used-as-a-default-for-defining-join-conditions-in-abap-dictionary---maintenance-status-----the-access-setting-in-the-maintenance-status-of-a-ddic-database-view-can-have-the-following-values-------read-only----------the-database-view-can-only-be-used-to-read-data-with-abap-sql-----------read--change--delete--and-insert----------if-the-database-view-contains-only-a-single-basis-table--data-can-be--changed--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenabap-sql-writing-htm--using-abap-sql--------a-database-view-with-multiple-basis-tables-can-only-be-read-with-abap-sql--if-a-database-view-is-based-on-a-single-table--data-can-be-inserted-in-this-table-using-the-view-with-the-abap-sql-statements--insert--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abapinsert-dbtab-htm--or--modify--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abapinsert-dbtab-htm---fields-from-the-basis-table-that-are-not-included-in-the-ddic-view-can-be-handled-as-follows-------if-the-table-field-is-defined-with--not-null--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-database-tables-init-htm--on-the-database--the-field-is-filled-with-the-type-specific-initial-value------if-the-table-field-is-defined-with--not-null--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-database-tables-init-htm--on-the-database--and-there-is-no-initial-value--nothing-can-be-inserted-and-a-database-error-occurs-with-a-corresponding-exception------if-the-table-field-is-not-defined-with--not-null--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-database-tables-init-htm--on-the-database--the-field-is-filled-with-the--null-value--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abennull-value-glosry-htm--glossary-entry-----hints------a-ddic-database-view-should-only-be-used-to-insert-data-in-the-basis-table-if-the-flag-for-initial-values-is-set-for-all-table-fields-that-are-not-included-in-the-ddic-view------modifying-existing-data-records-via-a-ddic-database-view-does-not-cause-any-issues-as-long-as-the-database-view-contains-all-key-fields-of-the-table------like-a-ddic-database-table--the-maintenance-status-of-a-database-view-has-a--display-and-maintain--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-database-tables-maint-htm--setting-alongside-the-access-setting--the-display-and-maintain-setting-must-match-the-access-setting--in-database-views-containing-multiple-basis-tables--only-the-setting-display-maintenance-not-allowed-is-possible---table-buffering-----just-like-in-ddic-database-tables--it-is-possible-to-define-for-a-database-view-whether-the-data-in-the--table-buffer--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abentable-buffer-glosry-htm--glossary-entry---is-buffered--the-same--buffering-types--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-database-tables-buffer-htm--can-be-defined-and--table-buffering-in-abap-sql--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abensap-puffering-htm--is-handled-in-the-same-way-for-views-and-for-ddic-database-tables-with-the-only-difference-being-that--when-data-is-modified-in-one-of-the-basis-tables--the-entire-buffer-is-invalidated-when-the--buffers-are-synchronized--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenbuffer-synchro-htm---regardless-of-the-buffering-type--in-client-dependent-views--however--this-only-affects-the-content-of-the-current-client--as-for-ddic-database-tables--the-settings-for-buffering-are-separate-technical-settings--that-can-be-transported-independently-from-the-view---the-following-prerequisites-must-be-met-before-a-ddic-database-view-can-be-buffered-------a-basis-table-can-occur-in-no-more-than-nine-buffered-database-views------if-all-fields-of-the-database-view-are-key-fields--these-fields-must-also-be-key-fields-of-the-basis-tables------a-ddic-view-that-allows-abap-sql-write-access-must-not-have-a--replacement-object--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-replacement-objects-htm----hint--for-an-existing-ddic-view-that-already-has-a-buffer-and-allows-abap-sql-write-access--no--replacement-object--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenddic-replacement-objects-htm--can-be-created---example--the-ddic-database-view-demo--scarr--spfli-contains-fields-of-the-tables-scarr-and-spfli--other-names-are-assigned-to-these-fields-in-the-view---the-associated-database-object-looks-as-follows---create-view-demo--scarr--spfli-----client-----id-----carrier-----flight-----departure-----destination---as-select----t1--mandt------t2--carrid------t1--carrname------t2--connid------t2--cityfrom------t2--cityto--from------scarr--t1-------spfli--t2-where-----t1--mandt-----t2--mandt--and-----t1--carrid----t2--carrid---the-view-can-be-accessed-as-follows-using-abap-sql---select-----------from-demo--scarr--spfli--------order-by-id--carrier--flight--------into-table-FINAL(result).
cl\_demo\_output=>display( result ).


### abenddic_projection_views.htm

---
title: "DDIC - Projection Views"
description: |
  A DDIC projection view is a DDIC table view that can be used to hide fields from a single basis table. No SQL view is created on the database. No selection conditions can be specified for a DDIC projection view. The structure type defined by the view fields of the projection view can be referenced i
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_projection_views.htm"
abapFile: "abenddic_projection_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "data", "abenddic", "projection", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) →  [DDIC - Table Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Projection%20Views%2C%20ABENDDIC_PROJECTION_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Projection Views

A DDIC projection view is a DDIC table view that can be used to hide fields from a single basis table. No SQL view is created on the database. No selection conditions can be specified for a DDIC projection view.

The structure type defined by the view fields of the projection view can be referenced in ABAP programs using TYPE. A projection view can be accessed using ABAP SQL but not using CDS views, Native SQL, or AMDP. The database interface transforms an ABAP SQL statement that accesses a projection view to a platform-dependent SQL statement.

The Access setting in the maintenance status of a projection view can have the following values:

-   Read only
    
    The projection view can only be used to read data with ABAP SQL.
    
-   Read, change, delete, and insert
    
    The projection view can be used to read or [change](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) data with ABAP SQL.
    

When rows are inserted via DDIC projection views, all fields from the basis table that are not part of the DDIC view are given the type-specific initial value. This is done regardless of whether the field is defined as [NOT NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm) on the database.

Hints

-   As in a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_client.htm), the client dependency of a DDIC projection view is determined by a column with the built-in dictionary type CLNT. This column must be the first column of the view.
-   Like a DDIC database table, the maintenance status of a projection view has a [Display and Maintain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_maint.htm) setting alongside the Access setting. The setting must match the Access setting.
-   The basis table of a projection view can be a [transparent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry") or a [global temporary table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry").

Example

The projection view DEMO\_SPFLI contains fields of the tables SPFLI. The view can be accessed as follows using ABAP SQL:

SELECT \*
       FROM demo\_spfli
       ORDER BY carrid, connid
       INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).


### abenddic_maintenance_views.htm

---
title: "DDIC - Maintenance Views"
description: |
  A DDIC maintenance view is a DDIC table view intended for performing writes on multiple DDIC database tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently. A DDIC maintenance view is not created on the d
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_maintenance_views.htm"
abapFile: "abenddic_maintenance_views.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "class", "data", "abenddic", "maintenance", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) →  [DDIC - Table Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Maintenance%20Views%2C%20ABENDDIC_MAINTENANCE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Maintenance Views

A DDIC maintenance view is a DDIC table view intended for performing writes on multiple DDIC database tables using extended table maintenance. A single maintenance view can be used to modify the content of multiple related database tables consistently.

A DDIC maintenance view is not created on the database. The structure type defined by a maintenance view can be referenced in ABAP programs using TYPE. A maintenance view cannot, however, be accessed using ABAP SQL. Instead, the transaction SE54 can be used to create dialogs called maintenance dialogs for maintenance views, which can themselves be used to edit the content of the tables of the maintenance views jointly in Table View Maintenance (transactions SM30 and SM31).

When data records are inserted using DDIC maintenance views, all tables fields not in the view are given the type-specific initial values of the field. This is done regardless of whether the field is defined as [NOT NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm) on the database.

Primary Table and Secondary Tables   

All DDIC database tables grouped in a DDIC maintenance view must be joined using [foreign key dependencies](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_forkeyrel.htm), which means that the join conditions of maintenance views are always derived from a foreign key. The first table included in the maintenance view is known as the primary table of the maintenance view. The tables added to this primary table using foreign keys are known as secondary tables. The following restrictions apply when selecting the secondary tables of a maintenance view:

-   The secondary tables must have an N:1 dependency on the primary table or on the transitively preceding secondary table. This makes sure that no more than one dependent data record exists in each of the secondary tables for a specific data record in the primary table. An N:1 dependency exists if the secondary table is the [check table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencheck_table_glosry.htm "Glossary Entry") of the [foreign key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry") in question.
-   If the secondary table is the [foreign key table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_table_glosry.htm "Glossary Entry"), the foreign key fields must be key fields of a table or the foreign key must have the [cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencardinality_glosry.htm "Glossary Entry") N:1 or N:C.

A maintenance view implements an inner join. All key fields of the primary table must be included in its maintenance view. All key fields of secondary tables that are not part of the foreign key (that is, they are not joined with a key field already in the view using a join condition) must also be included in the view. This makes sure that the records inserted using a maintenance view can be written correctly to the tables in the view.

Hint

If a DDIC database table is joined with its [text table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_table_glosry.htm "Glossary Entry") in a DDIC maintenance view, the logon language is selected automatically.

Time-Dependent Key   

In maintenance views, the key can be divided into a non-time-dependent area and a time-dependent area. The time-dependent area can, for example, contain date fields and time fields. The rows of views with time-dependent keys depend on dates and times.

Hint

When changing a time-dependent view, it is possible to restrict the new entries inserted to those that are only missing time information.

Maintenance Status   

The Access setting in the maintenance status of a maintenance view can have the following values:

-   Read only
    
    The maintenance view can only be used to read data.
    
-   Read, change, delete, and insert
    
    The maintenance view can be used to change, delete, and insert data.
    
-   Read and change
    
    The maintenance view can be used to read and change data, but not delete or insert it.
    
-   Read and change (time-dependent views)
    
    The maintenance view can be used to insert only entries whose non-time-dependent part of the key does not differ from existing entries.
    

Hint

Like a DDIC database table, the maintenance status of a DDIC maintenance view has a [Display and Maintenance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_maint.htm) setting alongside the Access setting. The setting must match the Access setting. The setting Display/maintenance not allowed is not possible here.

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

A DDIC maintenance view also has a [delivery class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm). The delivery class of a maintenance view is analyzed in the extended table maintenance.

-   If the view is assigned one of the delivery classes G or E, the customer namespace for the entries of the view must be defined in the DDIC database table TRESC.
-   The transport interface of extended table maintenance must match the delivery class.

The delivery class of the basis tables of a maintenance view is not affected by this. The basis tables of a maintenance views have their own [delivery class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_delivery.htm). This delivery class is used for upgrades and transports between customer systems


### abenddic_help_views.htm

---
title: "DDIC - Help Views"
description: |
  A DDIC help view is a DDIC table view for use in search helps(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm 'Glossary Entry'). The selection methods of a search help can be database tables, DDIC database views, and the special help views. DDIC database
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_help_views.htm"
abapFile: "abenddic_help_views.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abenddic", "help", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) →  [DDIC - Table Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Help%20Views%2C%20ABENDDIC_HELP_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Help Views

A DDIC help view is a DDIC table view for use in [search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry"). The selection methods of a search help can be database tables, DDIC database views, and the special help views. DDIC database tables restrict the search help to one single table and DDIC database views restrict it to inner joins, whereas help views also make outer joins possible. A help view is not created on the database. The structure type defined by a help view can be referenced in ABAP programs using TYPE. A help view cannot, however, be accessed using ABAP SQL.

The join conditions of a DDIC help view must be taken over from existing foreign keys. Tables can be grouped in help views only if they are joined using [foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry"). The first table included in the help view is known as the primary table of the help view. The tables added to this primary table using foreign keys are known as secondary tables. The same rules apply to secondary tables of DDIC help views as to secondary tables of [DDIC maintenance views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_maintenance_views.htm).

A DDIC help view implements an outer join, which means that the full content of the primary table of the help view is always displayed. If records in a secondary table cannot be read due to a selection condition, the content of the corresponding fields of the secondary table is displayed with initial values.

Hints

-   Like other views, DDIC help views can be used in elementary search helps if the selection is too complex to be defined using a single database table.
-   Unlike DDIC database views, DDIC help views implement an outer join, which is why this type is particularly well suited for including supplementary information such as explanatory texts from secondary tables. If the supplementary information were missing in an inner join, the complete data set would be excluded from the result set.
-   If the selection is only made using a table and its text table, a DDIC help view is not required. The table can be specified directly as a selection method of the search help, since the fields of the text table are also used as parameters in the search help in this case.
-   Help views should not be used if the selection is often restricted using fields of the secondary tables. In this case, a DDIC database view should be created instead. It might also be necessary to create additional suitable indexes for the basis tables.
-   Selections using help views can only be made quicker by making restrictions on the primary table. When accessing help views from the ABAP runtime framework, special selection routines are generated. These routines always make the selection using the primary table first and then use the records found as a key for selecting the supplementary information.


### abenddic_table_views.htm

---
title: "DDIC - Table Views"
description: |
  A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary tool(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) in ABAP Workbench(https://help.sap.com/doc/abapdocu_la
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_table_views.htm"
abapFile: "abenddic_table_views.htm"
keywords: ["select", "insert", "update", "do", "while", "if", "case", "try", "data", "types", "abenddic", "table", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Table%20Views%2C%20ABENDDIC_TABLE_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Table Views

A DDIC table view is a repository object in ABAP Dictionary defined for existing DDIC database tables and their fields in the form-based ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) in [ABAP Workbench](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_workbench_glosry.htm "Glossary Entry").

The definition of a DDIC table view consists of the following:

-   Basis tables
    
    A list of DDIC database tables that are accessed by the view. Multiple tables are associated using joins.
    
-   View fields
    
    A list of table fields of the basis tables that defines the structure of the view. Except in the case of DDIC projection views, a different [data element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_elements.htm) can be assigned to a view field than used for the corresponding table field of the basis table. As a prerequisite, the type of the table field must be defined using a data element with a [domain](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) and the new data element must reference the same domain. This makes it possible to adjust the semantic properties of the view field.
    
-   Key
    
    A key of the view that consists of key fields. The key is derived from the key fields of the basis tables and the join conditions. All the key fields must be located contiguously at the start of the view. Fields that do not belong to the key, but are located between the key fields, are automatically marked as key fields. All rows determined by the view must be unique with respect to the key. If no key can be identified, all fields of the view are key fields, which negatively impacts performance. In the case of ABAP SQL accesses to the view, its key behaves like the key of a DDIC database table.
    
-   Join conditions
    
    Conditions for joining multiple basis tables using inner joins or outer joins. A join condition compares two fields from basis tables of a view for equality. If no join conditions are specified for a pair of basis tables, the result is the cross product of both basis tables. Each row in a table is combined with each row of the other table. A join condition selects a subset of matching rows from the cross product.
    
-   Selection conditions
    
    Restrict the read rows to specific values of view fields or other fields.
    
    -   The possible comparison operators are \=, <>, \>=, \>, <=, <, LIKE, and NOT LIKE.
    -   Depending on the data type of the view field, constant texts and numbers are allowed as comparison values. [System fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") can be specified for DDIC maintenance views and DDIC help views using SYST-... or SY-....
    -   Multiple comparisons can be joined using AND and multiple comparisons for the same field can be joined using OR. Here, OR is stronger than AND.

The following types of DDIC table views exist, of which only the DDIC database views are defined as [SQL views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_view_glosry.htm "Glossary Entry") on the database:

-   [DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm)
-   [DDIC projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_projection_views.htm)
-   [DDIC maintenance views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_maintenance_views.htm)
-   [DDIC help views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_help_views.htm)

Like DDIC database tables, views have a short text description and (optional) documentation. A status known as a maintenance status determines whether a view is read-only or whether data can be inserted or modified in the view.

Hints

-   To implement a projection, either DDIC database views or DDIC projection views can be used.
-   Only DDIC database tables can be specified as the basis tables of table views. Other views are not possible as basis object.
-   In [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"), only views whose key fields are located together at the beginning of the view can be accessed.
-   Views whose fields are all key fields should not be written to using [UPDATE FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) or [MODIFY FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm). For DDIC database views, this produces a syntax check warning and for projection views a syntax error or runtime error.
-   As in DDIC database tables, the [client dependency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_dependency_glosry.htm "Glossary Entry") of a table view that can be accessed using ABAP SQL (a DDIC database view or a DDIC projection view) is determined by a first column with the built-in dictionary type CLNT. The client dependency of the basis tables is ignored.
-   Table views cannot be maintained using the [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").
-   [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") of the ABAP Core Data Services in [DDL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddl_source_code_glosry.htm "Glossary Entry") offer all the functions of table views and more. CDS view entities allow only read access, however, while some DDIC views can be modified.

Continue
[DDIC - Database Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm)
[DDIC - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_projection_views.htm)
[DDIC - Maintenance Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_maintenance_views.htm)
[DDIC - Help Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_help_views.htm)


---


## ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Extensions

**Files**: 9 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Extensions

Included pages: 9


### abenddic_enhancements.htm

---
title: "DDIC - Extensions"
description: |
  ABAP Dictionary offers customizing includes(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm 'Glossary Entry'), append structures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm 'Glossary Entry'), a
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm"
abapFile: "abenddic_enhancements.htm"
keywords: ["do", "if", "try", "data", "abenddic", "enhancements"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Extensions%2C%20ABENDDIC_ENHANCEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Extensions

ABAP Dictionary offers [customizing includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencustomizing_include_glosry.htm "Glossary Entry"), [append structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry"), and [DDIC append views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_view_glosry.htm "Glossary Entry") to extend existing [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm), [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm), [DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm), or [DDIC domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) without modifying the original object. Customizing includes indicate points already marked by SAP for extensions, whereas append structures can be appended anywhere.

-   [Customizing includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_customizing_includes.htm)
-   [Append structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm)
-   [DDIC append views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_views.htm)
-   [Fixed value appends](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_fixed_value_appends.htm)

[Indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindex_glosry.htm "Glossary Entry") of a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry") can be extended by [extension indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextension_index_glosry.htm "Glossary Entry").

[Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") can be extended using [append search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_search_help_glosry.htm "Glossary Entry").

[DDIC extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extension_glosry.htm "Glossary Entry") are connected to [Switch Framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switch](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenswitch_glosry.htm "Glossary Entry").

Hint

For [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry"), [CDS entity extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") are an option for extensions that is based on the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") of [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry").

Continue
[DDIC - Customizing Includes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_customizing_includes.htm)
[DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm)
[DDIC - Append Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_views.htm)
[DDIC - Fixed Value Appends](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_fixed_value_appends.htm)


### abenddic_customizing_includes.htm

---
title: "DDIC - Customizing Includes"
description: |
  A customizing include is a DDIC structure whose name has the prefix CI_ for customers and SI_ for partners and is in the customer namespace. SAP-delivered DDIC structures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) and DDIC database tables(https://h
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_customizing_includes.htm"
abapFile: "abenddic_customizing_includes.htm"
keywords: ["insert", "do", "if", "data", "abenddic", "customizing", "includes"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Customizing%20Includes%2C%20ABENDDIC_CUSTOMIZING_INCLUDES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Customizing Includes

A customizing include is a DDIC structure whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. SAP-delivered [DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) and [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) may contain customizing includes when delivered. These customizing includes in SAP-delivered objects are usually empty. They are not linked with existing structures, they are only intended to reserve names. In customer or partner systems, these includes can be extended according to the [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm). This is done by creating the included but empty customizing includes and adding components using customizing transactions. If a customizing include is extended in a transparent DDIC database table, no [adjustment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm) takes place. As a result, the order of fields in ABAP Dictionary and on the database might differ.

A customizing include can be included in multiple DDIC database tables or DDIC structures. Its extension is then applied to all DDIC database tables or DDIC structures in which it is included. It is not mandatory to extend an empty customizing include of a DDIC database table or DDIC structure.

Extending an SAP-delivered DDIC structure or DDIC database table using a customizing include does not modify the original object. If a customizing include is used to add fields to a standard DDIC database table or DDIC structure, these fields are inserted automatically into DDIC structures or DDIC database tables delivered by SAP in an upgrade.


### abenddic_append_structures.htm

---
title: "DDIC - Append Structures"
description: |
  An append structure is a structure in ABAP Dictionary appended to another DDIC structure(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) or to a DDIC database table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.h
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm"
abapFile: "abenddic_append_structures.htm"
keywords: ["insert", "do", "if", "try", "data", "abenddic", "append", "structures"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Append%20Structures%2C%20ABENDDIC_APPEND_STRUCTURES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Append Structures

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) or to a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) which adds its components to this structure or table. In customer systems, append structures can be added to DDIC structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techstruc.htm) for table fields.

The following extensions can be made to a DDIC database table or DDIC structure using an append structure:

-   New components can be inserted (if allowed by the [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm))
-   [Foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry") can be added to existing fields of a DDIC database table.
-   [Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") can be bound to existing components.

The append structure is a standalone object and changes to components of the append structure as well as transporting the append structure are made only using the append structure. When a DDIC database table or a DDIC structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added by the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to extend DDIC database tables:

-   Append structures can only be appended to [transparent tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry").
-   No append structures can be appended to DDIC database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.
-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm). No secondary index can be defined for the append structure itself.
-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified by an append structure.

Extensions of SAP structures or SAP tables using append structures in customer systems do not modify the original object. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures with names from the customer namespace to avoid naming conflicts. After an upgrade, the append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The following section describes the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)

Further Information

Rules for extending DDIC structures or DDIC database tables from a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry") by means of developer extensibility are described in section [C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm).

Hint

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE extends the structure DEMO\_STRUCTURE.

Continue
[DDIC - Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)


### abenddic_extend_type.htm

---
title: "DDIC - Dictionary DDL for Structure Extensions"
description: |
  A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in Dictionary DDL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm 'Glossary Entry') in the ABAP development tools for Eclipse (ADT)(https:
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm"
abapFile: "abenddic_extend_type.htm"
keywords: ["do", "if", "try", "data", "abenddic", "extend", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Structure%20Extensions%2C%20ABENDDIC_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Dictionary DDL for Structure Extensions

A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)


### abenddicddl_extend_type.htm

---
title: "DDIC DDL - EXTEND TYPE"
description: |
  Syntax structure_annos(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) EXTEND TYPE structdbtab WITH append_struct  ... component(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) ...
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm"
abapFile: "abenddicddl_extend_type.htm"
keywords: ["do", "if", "try", "data", "abenddicddl", "extend", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) →  [DDIC - Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20EXTEND%20TYPE%2C%20ABENDDICDDL_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - EXTEND TYPE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm)
EXTEND TYPE struct*|*dbtab WITH append\_struct {
  ...
  [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm)
  *\[*...
  [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm)
  ...*\]*;
  ...
  [include;](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [append structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) append\_struct in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry").

-   The statement EXTEND TYPE adds the append structure append\_struct either to an existing structure struct or to a DDIC database table dbtab.
-   The mandatory properties of the append structure must be specified in front of the statement EXTEND TYPE using the same annotations [structure\_annos](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_props.htm) as in the definition of a structure.
-   As in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_structure.htm), the components of the append structure are defined in a semicolon-separated list in curly brackets { }, either as individual components [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comps.htm) or by including include structures [include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_incl.htm).
-   As when including structures, an assignment to a search help and a definition of a foreign key dependency can be overwritten using the addition [extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_struct_comp_ext.htm) in a blank-separated list.

Hints

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_general_syntax_rules.htm), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.
-   A more detailed description of the syntax is available in the ADT documentation [Syntax of ABAP Dictionary Objects](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/fc6cd6f7d02f4546a33feb3f5fc9dd66).

Example

Adds the append structure DEMO\_APPEND\_STRUCTURE to the structure DEMO\_STRUCTURE in the ADT.

@EndUserText.label : 'Demo append structure'
@AbapCatalog.enhancement.category : #EXTENSIBLE\_CHARACTER\_NUMERIC
extend type demo\_structure with demo\_append\_structure {
  comp3 : dats;
  comp4 : tims; }

The source code used to define the structure DEMO\_STRUCTURE is not modified by this extension. In the ADT, however, an icon indicates that the structure is extended using DEMO\_APPEND\_STRUCTURE.


### abenddic_extend_type.htm

---
title: "DDIC - Dictionary DDL for Structure Extensions"
description: |
  A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in Dictionary DDL(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm 'Glossary Entry') in the ABAP development tools for Eclipse (ADT)(https:
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm"
abapFile: "abenddic_extend_type.htm"
keywords: ["do", "if", "try", "data", "abenddic", "extend", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) →  [DDIC - Append Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Structure%20Extensions%2C%20ABENDDIC_EXTEND_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

DDIC - Dictionary DDL for Structure Extensions

A DDIC structure or DDIC database table can be given a source-code-based extension known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)

Hint

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[DDIC DDL - EXTEND TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_extend_type.htm)


### abenddic_append_structures.htm

---
title: "DDIC - Append Structures"
description: |
  An append structure is a structure in ABAP Dictionary appended to another DDIC structure(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) or to a DDIC database table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.h
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_structures.htm"
abapFile: "abenddic_append_structures.htm"
keywords: ["insert", "do", "if", "try", "data", "abenddic", "append", "structures"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Append%20Structures%2C%20ABENDDIC_APPEND_STRUCTURES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Append Structures

An append structure is a structure in ABAP Dictionary appended to another [DDIC structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures.htm) or to a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) which adds its components to this structure or table. In customer systems, append structures can be added to DDIC structures and DDIC database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techstruc.htm) for table fields.

The following extensions can be made to a DDIC database table or DDIC structure using an append structure:

-   New components can be inserted (if allowed by the [enhancement category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_enh_cat.htm))
-   [Foreign keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry") can be added to existing fields of a DDIC database table.
-   [Search helps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensearch_help_glosry.htm "Glossary Entry") can be bound to existing components.

The append structure is a standalone object and changes to components of the append structure as well as transporting the append structure are made only using the append structure. When a DDIC database table or a DDIC structure is activated, all associated append structures are found and their components are appended to the DDIC database table or structure. Any foreign keys or search help bindings added by the append structure are also appended. When an append structure is activated, the assigned DDIC database table or DDIC structure is adjusted to the changes made. Any existing tables are not [adjusted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_adj.htm), which can put the fields in the dictionary in a different order from the order on the database. When a DDIC structure or DDIC database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to extend DDIC database tables:

-   Append structures can only be appended to [transparent tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransparent_table_glosry.htm "Glossary Entry").
-   No append structures can be appended to DDIC database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.
-   Any fields appended to a DDIC database table using an append structure can be added to its [secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm). No secondary index can be defined for the append structure itself.
-   A binding of a check table or search help that already exists for a field of the DDIC database table cannot be modified by an append structure.

Extensions of SAP structures or SAP tables using append structures in customer systems do not modify the original object. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures with names from the customer namespace to avoid naming conflicts. After an upgrade, the append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The following section describes the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)

Further Information

Rules for extending DDIC structures or DDIC database tables from a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_version_glosry.htm "Glossary Entry") by means of developer extensibility are described in section [C0 Contract Rules for DDIC Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm).

Hint

The same structure can be appended to multiple DDIC database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE extends the structure DEMO\_STRUCTURE.

Continue
[DDIC - Dictionary DDL for Structure Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_extend_type.htm)


### abenddic_append_views.htm

---
title: "DDIC - Append Views"
description: |
  DDIC database views(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm) delivered by SAP can be extended by partners and customers using views known as DDIC append views, without modifying the original object. The name of a DDIC append view is subject to th
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_append_views.htm"
abapFile: "abenddic_append_views.htm"
keywords: ["select", "do", "if", "try", "data", "abenddic", "append", "views"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Append%20Views%2C%20ABENDDIC_APPEND_VIEWS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Append Views

[DDIC database views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_views.htm) delivered by SAP can be extended by partners and customers using views known as DDIC append views, without modifying the original object. The name of a DDIC append view is subject to the same rules as the name of a [DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A DDIC append view can add further fields from one of the basis tables of a DDIC database view to the database view in question. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a DDIC database view. A DDIC append view is assigned to exactly one DDIC database view. More than one DDIC append view can be created for a DDIC database view.

When a DDIC append view is activated, an [append structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenappend_structure_glosry.htm "Glossary Entry") with this name is created in ABAP Dictionary. Its components are the additional view fields of the append view.

If a DDIC database view is activated, all DDIC append views for this view are found and their fields are appended to the DDIC database view. The append structure of the append view is added to the structure of the DDIC database view. If an append view is created or modified, the associated DDIC database view is changed automatically when the append view is activated.

Hints

-   DDIC append views are possible only for DDIC database views and not for any other kind of [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm).
-   In [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry"), [CDS entity extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_extend_glosry.htm "Glossary Entry") are available to extend [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry").

Example

The DDIC append view DEMO\_APPEND\_VIEW is added to the DDIC database view DEMO\_ORIGINAL. The program DEMO\_APPEND\_VIEW uses [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) to access the extended view. It displays the components of the original view and of the append view and the result set.


### abenddic_fixed_value_appends.htm

---
title: "DDIC - Fixed Value Appends"
description: |
  Domains(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) delivered by SAP can be extended by partners and customers using appends known as fixed value appends, without modifying the original object. The name of a fixed value append is subject to the same rules
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_fixed_value_appends.htm"
abapFile: "abenddic_fixed_value_appends.htm"
keywords: ["do", "if", "try", "abenddic", "fixed", "value", "appends"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Fixed%20Value%20Appends%2C%20ABENDDIC_FIXED_VALUE_APPENDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Fixed Value Appends

[Domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_domains.htm) delivered by SAP can be extended by partners and customers using appends known as fixed value appends, without modifying the original object. The name of a fixed value append is subject to the same rules as the name of a domain and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A fixed value append adds further [fixed values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_value_glosry.htm "Glossary Entry") or intervals to the value range of a domain. A domain can have more than one fixed value append.

When a domain is activated, all fixed value appends for this domain are found and their fixed values and intervals added to the domain. When a fixed value append is created or modified, the associated domain is adjusted to this change automatically when the fixed value append is activated.

Example

The fixed value append DEMO\_FIXED\_VALUE\_APPEND is added to the domain DEMO\_ORIGINAL. The program DEMO\_FIXED\_VALUE\_APPEND reads the fixed values and intervals of the extended domain and displays them. In the table, the column APPVAL indicates which fixed values and intervals come from the fixed value append.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types / TYPES / TYPES, BEGIN OF struct_type

**Files**: 3 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types / TYPES / TYPES, LOB HANDLE

Included pages: 4


### abaptypes_lob_handle.htm

---
title: "TYPES, LOB HANDLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm) Syntax TYPES dtype TYPE dbtabview lob_handle_type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR lob_handle_columns(https://help.sa
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm"
abapFile: "abaptypes_lob_handle.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abaptypes", "lob", "handle"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20LOB%20HANDLE%2C%20ABAPTYPES_LOB_HANDLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, LOB HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype TYPE dbtab*|*view
                 [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                 ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm). dbtab expects a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry") defined in the ABAP Dictionary or a [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined for view in ABAP Dictionary.

The column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are used to determine [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") from dbtab. The statement creates a deep structure that is constructed for all columns that are not among the specified columns exactly as it is constructed for a regular [TYPE reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_referring.htm) to dbtab. For the LOBs included in the specified columns, a component with the same name is created as the [LOB handle component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry"). The [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the LOB handle components is a class or an interface that is determined by the type specification [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), to which the respective specified column is assigned.

The combination options of the additions specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are determined by the following rules:

-   A LOB handle structure can be derived for either [reading](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) or [writing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) ABAP SQL statements only.
    -   A structure for reads can only contain the type specifications [READER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), and [LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
    -   A structure for writes can only contain the type specifications [WRITER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) and [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The definition of the LOB handle components must be mutually exclusive, which means that columns must not be assigned to inappropriate types or a column cannot be assigned to multiple types.
-   The definition of LOB handle components must not contain redundancies. A set of LOB handle components must be produced for each specification of:
    
    ... [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ...
    
    This set of LOB handle components must not overlap with another set of LOB handle components of a different specification.
    
-   The definition of the LOB handle components must be specified with as few specifications as possible. If the same set of LOB handle components can be created by one rather than multiple specifications, the more comprehensive option must be used.

Apart from the rules specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), the following general restrictions also apply:

-   At least one column must be specified.
-   The [type specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) for the first three specified columns for LOB handle components for reads or the first two columns for LOB handle components for writes must be different
-   In each case, only one [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL ... COLUMNS can be made, in which BLOB or CLOB are specified.
-   The [column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) specification ALL BLOB*|*CLOB COLUMNS includes all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in a [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) COLUMNS ... for the same [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL OTHER COLUMNS includes all columns that are not specified individually. ALL OTHER BLOB COLUMNS or ALL OTHER CLOB COLUMNS cannot be specified at the same time.
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL COLUMNS includes all LOBs and can therefore only be specified on its own.

Hints

-   LOB handle structures can also be defined using appropriate typing of components between [BEGIN OF and END OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_struc.htm).
-   If dbtab does not contain any LOBs that match the specified columns, no LOB handle components are created, and the statement creates a regular work area.
-   If LOBs are added to dbtab that match the [specified columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL *\[*OTHER*\]* ..., LOB handle components are also created for these.
-   LOB handle structures can also be derived in the ABAP Dictionary. Transaction SE11 offers such a function for DDIC database tables or views containing LOBs.

Example

Declaration of types for work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and a locator for all LOBs in the DDIC database table DEMO\_BLOB\_TABLE.

TYPES:
  wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture,
  wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture,
  wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)

Continue
[TYPES, lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm)
[TYPES, lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
![Example](exa.gif "Example") [Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_type.htm

---
title: "Syntax"
description: |
  ...  READERLOCATORLOB HANDLE    WRITERLOCATOR  ... Effect These additions define the static type of the LOB handle components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm 'Glossary Entry') when deriving a LOB han
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm"
abapFile: "abaptypes_lob_handle_type.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "lob", "handle", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_type%2C%20ABAPTYPES_LOB_HANDLE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_type

Syntax

  ... *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
    *|* *{* WRITER*|*LOCATOR *}* ...

Effect

These additions define the static type of the [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   The addition READER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_READER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_READER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition WRITER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_WRITER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_WRITER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOCATOR defines the following:
    -   The static type CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOB HANDLE defines the following:
    -   The static type IF\_ABAP\_DB\_BLOB\_HANDLE for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type IF\_ABAP\_DB\_CLOB\_HANDLE for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")

The additions READER and WRITER cannot be used together in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm). Furthermore, WRITER cannot be used together with LOB HANDLE.

The combination options with the column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Example

Definition of various LOB-Handle components for the individual columns of a database table DEMO\_LOB\_TABLE.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS blob1
                 LOCATOR FOR COLUMNS blob2
                 LOB HANDLE FOR COLUMNS blob3.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_columns.htm

---
title: "Syntax"
description: |
  ...  COLUMNS blob1 blob2 ... clob1 clob2 ...    ALL OTHER BLOBCLOB COLUMNS  ... Effect These additions define which columns of the database table or the view dbtab are declared as LOB handle components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-U
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm"
abapFile: "abaptypes_lob_handle_columns.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "lob", "handle", "columns"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_columns%2C%20ABAPTYPES_LOB_HANDLE_COLUMNS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_columns

Syntax

  ... *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
    *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}* ...

Effect

These additions define which columns of the database table or the view dbtab are declared as [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   COLUMNS blob1 blob2 ... clob1 clob2 ...
    
    specifies individual [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") blob1, blob2, ... or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") clob1, clob2, ... These must exist in dbtab.
    
-   ALL OTHER BLOB*|*CLOB COLUMNS
    
    This specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column blob or clob must be specified using COLUMNS ...
    
-   ALL BLOB*|*CLOB COLUMNS
    
    specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") of dbtab.
    
-   ALL OTHER COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column must be specified using COLUMNS ...
    
-   ALL COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab.
    

No other columns can be specified in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) after the column specification ALL OTHER ...

The combination options of the column specifications with each other below and with the types specified using [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Hint

Columns of the data type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry").

Example

Demonstration of various column specifications in the definition of LOB-Handle components.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS clob1 clob2
                 LOB HANDLE FOR ALL BLOB COLUMNS
                 LOCATOR FOR ALL OTHER CLOB COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abentypes_lob_handle_abexa.htm

---
title: "Deriving LOB Handle Structures"
description: |
  This example demonstrates how LOB handle structures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm 'Glossary Entry') are derived using the statement TYPES(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm"
abapFile: "abentypes_lob_handle_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentypes", "lob", "handle", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Deriving%20LOB%20Handle%20Structures%2C%20ABENTYPES_LOB_HANDLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Deriving LOB Handle Structures

This example demonstrates how [LOB handle structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") are derived using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_types\_lob\_handle DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES:
      lob\_handle\_structure\_1 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 blob1,
      lob\_handle\_structure\_2 TYPE demo\_lob\_table
                             LOB HANDLE FOR ALL COLUMNS,
      lob\_handle\_structure\_3 TYPE demo\_lob\_table
                             LOCATOR FOR ALL BLOB COLUMNS
                             WRITER FOR ALL CLOB COLUMNS,
      lob\_handle\_structure\_4 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 clob2
                             LOB HANDLE FOR ALL BLOB COLUMNS
                             LOCATOR FOR ALL OTHER CLOB COLUMNS,
      lob\_handle\_structure\_5 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1 blob2 blob3
                             LOCATOR FOR COLUMNS clob1 clob2 clob3
                             LOB HANDLE FOR ALL OTHER COLUMNS,
      lob\_handle\_structure\_6 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1
                             LOCATOR FOR COLUMNS blob2
                             LOB HANDLE FOR COLUMNS blob3
                             LOB HANDLE FOR ALL CLOB COLUMNS.
  PRIVATE SECTION.
    METHODS output\_type IMPORTING struct TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_types\_lob\_handle IMPLEMENTATION.
  METHOD main.
    DO 6 TIMES.
      output\_type( |LOB\_HANDLE\_STRUCTURE\_{ sy-index }| ).
    ENDDO.
  ENDMETHOD.
  METHOD output\_type.
    TYPES: BEGIN OF result,
             component\_name TYPE string,
             absolute\_name  TYPE string,
           END OF result,
           results TYPE TABLE OF result WITH EMPTY KEY.
    out->next\_section( struct
      )->write\_data(
           VALUE results(
             FOR component IN CAST cl\_abap\_structdescr(
               cl\_abap\_structdescr=>describe\_by\_name( struct )
                 )->components
             WHERE ( type\_kind = cl\_abap\_typedescr=>typekind\_oref )
             ( VALUE #(
                 component\_name = component-name
                 absolute\_name  = CAST cl\_abap\_refdescr(
                   cl\_abap\_typedescr=>describe\_by\_name(
                     struct && \`-\` && component-name )
                       )->get\_referenced\_type(
                       )->absolute\_name ) ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The package-visible area of the class demo\_lob\_handles contains different derivations of LOB handle structures from the database table DEMO\_LOB\_TABLE. The methods of this class are used to output of the static type of the derived [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry").

The DEMO\_LOB\_TABLE database table contains a key field of type INT4, as well as three columns CLOB1, CLOB2, CLOB3 of type STRING and three columns BLOB1, BLOB2, BLOB3 of type RAWSTRING.

The derivations listed here work as follows:

-   In the structured type lob\_handle\_structure\_1, clob1 and blob1 become LOB handle components by column specifications directly after READER. The component clob1 contains the static type CL\_ABAP\_DB\_C\_READER and blob1 contains the static type CL\_ABAP\_DB\_X\_READER. All other components are represented in accordance with the [regular rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for their built-in types.
-   In the structured type lob\_handle\_structure\_2, all LOB components are converted into LOB handle components by specifying FOR ALL COLUMNS. The static type of the components of type STRING is IF\_ABAP\_DB\_CLOB\_HANDLE and the static type for the components of type RAWSTRING is IF\_ABAP\_DB\_BLOB\_HANDLE.
-   In the structured type lob\_handle\_structure\_3, all LOB components are converted into LOB handle components. The static type of the components of type STRING is converted into CL\_ABAP\_DB\_C\_WRITER by specifying WRITER FOR ALL CLOB COLUMNS and the static type for the components of type RAWSTRING is converted into CL\_ABAP\_DB\_X\_LOCATOR by specifying LOCATOR FOR ALL BLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_4, all LOB components are converted into LOB handle components. The static type of the components clob1 and clob2 is converted into CL\_ABAP\_DB\_C\_READER by specifying READER directly. All components of the type RAWSTRING are converted into reference types for IF\_ABAP\_DB\_BLOB\_HANDLE by specifying LOB HANDLE FOR ALL BLOB COLUMNS. The remaining components of the type STRING are converted into reference types for CL\_ABAP\_DB\_C\_LOCATOR by specifying LOCATOR FOR ALL OTHER CLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_5, all LOB components are listed directly, and thus converted into the corresponding LOB handle components with the static types CL\_ABAP\_DB\_C\_LOCATOR for clob1, clob2, and clob3 and CL\_ABAP\_DB\_X\_READER for blob1, blob2, and blob3. The specification LOB HANDLE FOR ALL OTHER COLUMNS has no direct effect, but only affects any enhancements to the database table with further LOBs, which then preserve their type-compliant interface reference type.
-   In the structured type lob\_handle\_structure\_6, all LOB components are converted into handle LOB components, whereby here the maximum number of column specifications is demonstrated. FOR ALL CLOB COLUMNS can only be specified since no components of type STRING were covered by previous statements.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types / TYPES / TYPES, BEGIN OF MESH mesh_type

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types / TYPES / TYPES, LOB HANDLE

Included pages: 4


### abaptypes_lob_handle.htm

---
title: "TYPES, LOB HANDLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm) Syntax TYPES dtype TYPE dbtabview lob_handle_type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR lob_handle_columns(https://help.sa
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm"
abapFile: "abaptypes_lob_handle.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abaptypes", "lob", "handle"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20LOB%20HANDLE%2C%20ABAPTYPES_LOB_HANDLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, LOB HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype TYPE dbtab*|*view
                 [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                 ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm). dbtab expects a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry") defined in the ABAP Dictionary or a [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined for view in ABAP Dictionary.

The column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are used to determine [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") from dbtab. The statement creates a deep structure that is constructed for all columns that are not among the specified columns exactly as it is constructed for a regular [TYPE reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_referring.htm) to dbtab. For the LOBs included in the specified columns, a component with the same name is created as the [LOB handle component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry"). The [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the LOB handle components is a class or an interface that is determined by the type specification [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), to which the respective specified column is assigned.

The combination options of the additions specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are determined by the following rules:

-   A LOB handle structure can be derived for either [reading](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) or [writing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) ABAP SQL statements only.
    -   A structure for reads can only contain the type specifications [READER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), and [LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
    -   A structure for writes can only contain the type specifications [WRITER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) and [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The definition of the LOB handle components must be mutually exclusive, which means that columns must not be assigned to inappropriate types or a column cannot be assigned to multiple types.
-   The definition of LOB handle components must not contain redundancies. A set of LOB handle components must be produced for each specification of:
    
    ... [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ...
    
    This set of LOB handle components must not overlap with another set of LOB handle components of a different specification.
    
-   The definition of the LOB handle components must be specified with as few specifications as possible. If the same set of LOB handle components can be created by one rather than multiple specifications, the more comprehensive option must be used.

Apart from the rules specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), the following general restrictions also apply:

-   At least one column must be specified.
-   The [type specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) for the first three specified columns for LOB handle components for reads or the first two columns for LOB handle components for writes must be different
-   In each case, only one [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL ... COLUMNS can be made, in which BLOB or CLOB are specified.
-   The [column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) specification ALL BLOB*|*CLOB COLUMNS includes all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in a [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) COLUMNS ... for the same [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL OTHER COLUMNS includes all columns that are not specified individually. ALL OTHER BLOB COLUMNS or ALL OTHER CLOB COLUMNS cannot be specified at the same time.
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL COLUMNS includes all LOBs and can therefore only be specified on its own.

Hints

-   LOB handle structures can also be defined using appropriate typing of components between [BEGIN OF and END OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_struc.htm).
-   If dbtab does not contain any LOBs that match the specified columns, no LOB handle components are created, and the statement creates a regular work area.
-   If LOBs are added to dbtab that match the [specified columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL *\[*OTHER*\]* ..., LOB handle components are also created for these.
-   LOB handle structures can also be derived in the ABAP Dictionary. Transaction SE11 offers such a function for DDIC database tables or views containing LOBs.

Example

Declaration of types for work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and a locator for all LOBs in the DDIC database table DEMO\_BLOB\_TABLE.

TYPES:
  wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture,
  wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture,
  wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)

Continue
[TYPES, lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm)
[TYPES, lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
![Example](exa.gif "Example") [Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_type.htm

---
title: "Syntax"
description: |
  ...  READERLOCATORLOB HANDLE    WRITERLOCATOR  ... Effect These additions define the static type of the LOB handle components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm 'Glossary Entry') when deriving a LOB han
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm"
abapFile: "abaptypes_lob_handle_type.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "lob", "handle", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_type%2C%20ABAPTYPES_LOB_HANDLE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_type

Syntax

  ... *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
    *|* *{* WRITER*|*LOCATOR *}* ...

Effect

These additions define the static type of the [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   The addition READER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_READER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_READER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition WRITER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_WRITER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_WRITER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOCATOR defines the following:
    -   The static type CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOB HANDLE defines the following:
    -   The static type IF\_ABAP\_DB\_BLOB\_HANDLE for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type IF\_ABAP\_DB\_CLOB\_HANDLE for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")

The additions READER and WRITER cannot be used together in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm). Furthermore, WRITER cannot be used together with LOB HANDLE.

The combination options with the column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Example

Definition of various LOB-Handle components for the individual columns of a database table DEMO\_LOB\_TABLE.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS blob1
                 LOCATOR FOR COLUMNS blob2
                 LOB HANDLE FOR COLUMNS blob3.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_columns.htm

---
title: "Syntax"
description: |
  ...  COLUMNS blob1 blob2 ... clob1 clob2 ...    ALL OTHER BLOBCLOB COLUMNS  ... Effect These additions define which columns of the database table or the view dbtab are declared as LOB handle components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-U
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm"
abapFile: "abaptypes_lob_handle_columns.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "lob", "handle", "columns"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_columns%2C%20ABAPTYPES_LOB_HANDLE_COLUMNS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_columns

Syntax

  ... *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
    *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}* ...

Effect

These additions define which columns of the database table or the view dbtab are declared as [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   COLUMNS blob1 blob2 ... clob1 clob2 ...
    
    specifies individual [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") blob1, blob2, ... or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") clob1, clob2, ... These must exist in dbtab.
    
-   ALL OTHER BLOB*|*CLOB COLUMNS
    
    This specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column blob or clob must be specified using COLUMNS ...
    
-   ALL BLOB*|*CLOB COLUMNS
    
    specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") of dbtab.
    
-   ALL OTHER COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column must be specified using COLUMNS ...
    
-   ALL COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab.
    

No other columns can be specified in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) after the column specification ALL OTHER ...

The combination options of the column specifications with each other below and with the types specified using [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Hint

Columns of the data type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry").

Example

Demonstration of various column specifications in the definition of LOB-Handle components.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS clob1 clob2
                 LOB HANDLE FOR ALL BLOB COLUMNS
                 LOCATOR FOR ALL OTHER CLOB COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abentypes_lob_handle_abexa.htm

---
title: "Deriving LOB Handle Structures"
description: |
  This example demonstrates how LOB handle structures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm 'Glossary Entry') are derived using the statement TYPES(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm"
abapFile: "abentypes_lob_handle_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentypes", "lob", "handle", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Deriving%20LOB%20Handle%20Structures%2C%20ABENTYPES_LOB_HANDLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Deriving LOB Handle Structures

This example demonstrates how [LOB handle structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") are derived using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_types\_lob\_handle DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES:
      lob\_handle\_structure\_1 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 blob1,
      lob\_handle\_structure\_2 TYPE demo\_lob\_table
                             LOB HANDLE FOR ALL COLUMNS,
      lob\_handle\_structure\_3 TYPE demo\_lob\_table
                             LOCATOR FOR ALL BLOB COLUMNS
                             WRITER FOR ALL CLOB COLUMNS,
      lob\_handle\_structure\_4 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 clob2
                             LOB HANDLE FOR ALL BLOB COLUMNS
                             LOCATOR FOR ALL OTHER CLOB COLUMNS,
      lob\_handle\_structure\_5 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1 blob2 blob3
                             LOCATOR FOR COLUMNS clob1 clob2 clob3
                             LOB HANDLE FOR ALL OTHER COLUMNS,
      lob\_handle\_structure\_6 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1
                             LOCATOR FOR COLUMNS blob2
                             LOB HANDLE FOR COLUMNS blob3
                             LOB HANDLE FOR ALL CLOB COLUMNS.
  PRIVATE SECTION.
    METHODS output\_type IMPORTING struct TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_types\_lob\_handle IMPLEMENTATION.
  METHOD main.
    DO 6 TIMES.
      output\_type( |LOB\_HANDLE\_STRUCTURE\_{ sy-index }| ).
    ENDDO.
  ENDMETHOD.
  METHOD output\_type.
    TYPES: BEGIN OF result,
             component\_name TYPE string,
             absolute\_name  TYPE string,
           END OF result,
           results TYPE TABLE OF result WITH EMPTY KEY.
    out->next\_section( struct
      )->write\_data(
           VALUE results(
             FOR component IN CAST cl\_abap\_structdescr(
               cl\_abap\_structdescr=>describe\_by\_name( struct )
                 )->components
             WHERE ( type\_kind = cl\_abap\_typedescr=>typekind\_oref )
             ( VALUE #(
                 component\_name = component-name
                 absolute\_name  = CAST cl\_abap\_refdescr(
                   cl\_abap\_typedescr=>describe\_by\_name(
                     struct && \`-\` && component-name )
                       )->get\_referenced\_type(
                       )->absolute\_name ) ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The package-visible area of the class demo\_lob\_handles contains different derivations of LOB handle structures from the database table DEMO\_LOB\_TABLE. The methods of this class are used to output of the static type of the derived [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry").

The DEMO\_LOB\_TABLE database table contains a key field of type INT4, as well as three columns CLOB1, CLOB2, CLOB3 of type STRING and three columns BLOB1, BLOB2, BLOB3 of type RAWSTRING.

The derivations listed here work as follows:

-   In the structured type lob\_handle\_structure\_1, clob1 and blob1 become LOB handle components by column specifications directly after READER. The component clob1 contains the static type CL\_ABAP\_DB\_C\_READER and blob1 contains the static type CL\_ABAP\_DB\_X\_READER. All other components are represented in accordance with the [regular rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for their built-in types.
-   In the structured type lob\_handle\_structure\_2, all LOB components are converted into LOB handle components by specifying FOR ALL COLUMNS. The static type of the components of type STRING is IF\_ABAP\_DB\_CLOB\_HANDLE and the static type for the components of type RAWSTRING is IF\_ABAP\_DB\_BLOB\_HANDLE.
-   In the structured type lob\_handle\_structure\_3, all LOB components are converted into LOB handle components. The static type of the components of type STRING is converted into CL\_ABAP\_DB\_C\_WRITER by specifying WRITER FOR ALL CLOB COLUMNS and the static type for the components of type RAWSTRING is converted into CL\_ABAP\_DB\_X\_LOCATOR by specifying LOCATOR FOR ALL BLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_4, all LOB components are converted into LOB handle components. The static type of the components clob1 and clob2 is converted into CL\_ABAP\_DB\_C\_READER by specifying READER directly. All components of the type RAWSTRING are converted into reference types for IF\_ABAP\_DB\_BLOB\_HANDLE by specifying LOB HANDLE FOR ALL BLOB COLUMNS. The remaining components of the type STRING are converted into reference types for CL\_ABAP\_DB\_C\_LOCATOR by specifying LOCATOR FOR ALL OTHER CLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_5, all LOB components are listed directly, and thus converted into the corresponding LOB handle components with the static types CL\_ABAP\_DB\_C\_LOCATOR for clob1, clob2, and clob3 and CL\_ABAP\_DB\_X\_READER for blob1, blob2, and blob3. The specification LOB HANDLE FOR ALL OTHER COLUMNS has no direct effect, but only affects any enhancements to the database table with further LOBs, which then preserve their type-compliant interface reference type.
-   In the structured type lob\_handle\_structure\_6, all LOB components are converted into handle LOB components, whereby here the maximum number of column specifications is demonstrated. FOR ALL CLOB COLUMNS can only be specified since no components of type STRING were covered by previous statements.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types / TYPES / TYPES, LOB HANDLE

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Declaration Statements / Data Types / TYPES / TYPES, LOB HANDLE

Included pages: 4


### abaptypes_lob_handle.htm

---
title: "TYPES, LOB HANDLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm) Syntax TYPES dtype TYPE dbtabview lob_handle_type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR lob_handle_columns(https://help.sa
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm"
abapFile: "abaptypes_lob_handle.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abaptypes", "lob", "handle"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20LOB%20HANDLE%2C%20ABAPTYPES_LOB_HANDLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, LOB HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_shortref.htm)

Syntax

TYPES dtype TYPE dbtab*|*view
                 [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                *\[* [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
                 ...                                   *\]*.

Effect

Derivation of a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") as a work area for working with [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm). dbtab expects a [DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry") defined in the ABAP Dictionary or a [DDIC database view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined for view in ABAP Dictionary.

The column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are used to determine [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") from dbtab. The statement creates a deep structure that is constructed for all columns that are not among the specified columns exactly as it is constructed for a regular [TYPE reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_referring.htm) to dbtab. For the LOBs included in the specified columns, a component with the same name is created as the [LOB handle component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry"). The [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_type_glosry.htm "Glossary Entry") of the LOB handle components is a class or an interface that is determined by the type specification [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), to which the respective specified column is assigned.

The combination options of the additions specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are determined by the following rules:

-   A LOB handle structure can be derived for either [reading](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) or [writing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm) ABAP SQL statements only.
    -   A structure for reads can only contain the type specifications [READER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), and [LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
    -   A structure for writes can only contain the type specifications [WRITER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) and [LOCATOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The definition of the LOB handle components must be mutually exclusive, which means that columns must not be assigned to inappropriate types or a column cannot be assigned to multiple types.
-   The definition of LOB handle components must not contain redundancies. A set of LOB handle components must be produced for each specification of:
    
    ... [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) FOR [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ...
    
    This set of LOB handle components must not overlap with another set of LOB handle components of a different specification.
    
-   The definition of the LOB handle components must be specified with as few specifications as possible. If the same set of LOB handle components can be created by one rather than multiple specifications, the more comprehensive option must be used.

Apart from the rules specified under [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) and [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm), the following general restrictions also apply:

-   At least one column must be specified.
-   The [type specifications](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) for the first three specified columns for LOB handle components for reads or the first two columns for LOB handle components for writes must be different
-   In each case, only one [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL ... COLUMNS can be made, in which BLOB or CLOB are specified.
-   The [column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) specification ALL BLOB*|*CLOB COLUMNS includes all BLOBs or CLOBs. When specified, a single BLOB or CLOB cannot be specified in a [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) COLUMNS ... for the same [static type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm).
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL OTHER COLUMNS includes all columns that are not specified individually. ALL OTHER BLOB COLUMNS or ALL OTHER CLOB COLUMNS cannot be specified at the same time.
-   The [column specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL COLUMNS includes all LOBs and can therefore only be specified on its own.

Hints

-   LOB handle structures can also be defined using appropriate typing of components between [BEGIN OF and END OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_struc.htm).
-   If dbtab does not contain any LOBs that match the specified columns, no LOB handle components are created, and the statement creates a regular work area.
-   If LOBs are added to dbtab that match the [specified columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) ALL *\[*OTHER*\]* ..., LOB handle components are also created for these.
-   LOB handle structures can also be derived in the ABAP Dictionary. Transaction SE11 offers such a function for DDIC database tables or views containing LOBs.

Example

Declaration of types for work areas with LOB handle components for a writer stream and a reader stream for the column PICTURE and a locator for all LOBs in the DDIC database table DEMO\_BLOB\_TABLE.

TYPES:
  wa1 TYPE demo\_blob\_table WRITER FOR COLUMNS picture,
  wa2 TYPE demo\_blob\_table READER FOR COLUMNS picture,
  wa3 TYPE demo\_blob\_table LOCATOR FOR ALL COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)

Continue
[TYPES, lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm)
[TYPES, lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm)
![Example](exa.gif "Example") [Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_type.htm

---
title: "Syntax"
description: |
  ...  READERLOCATORLOB HANDLE    WRITERLOCATOR  ... Effect These additions define the static type of the LOB handle components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm 'Glossary Entry') when deriving a LOB han
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm"
abapFile: "abaptypes_lob_handle_type.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "lob", "handle", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_type%2C%20ABAPTYPES_LOB_HANDLE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_type

Syntax

  ... *{* READER*|*LOCATOR*|**{*LOB HANDLE*}* *}*
    *|* *{* WRITER*|*LOCATOR *}* ...

Effect

These additions define the static type of the [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   The addition READER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_READER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_READER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition WRITER defines the following:
    -   The static type CL\_ABAP\_DB\_X\_WRITER for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_WRITER for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOCATOR defines the following:
    -   The static type CL\_ABAP\_DB\_X\_LOCATOR for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type CL\_ABAP\_DB\_C\_LOCATOR for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")
-   The addition LOB HANDLE defines the following:
    -   The static type IF\_ABAP\_DB\_BLOB\_HANDLE for [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry")
    -   The static type IF\_ABAP\_DB\_CLOB\_HANDLE for [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry")

The additions READER and WRITER cannot be used together in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm). Furthermore, WRITER cannot be used together with LOB HANDLE.

The combination options with the column specifications [lob\_handle\_columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Example

Definition of various LOB-Handle components for the individual columns of a database table DEMO\_LOB\_TABLE.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS blob1
                 LOCATOR FOR COLUMNS blob2
                 LOB HANDLE FOR COLUMNS blob3.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abaptypes_lob_handle_columns.htm

---
title: "Syntax"
description: |
  ...  COLUMNS blob1 blob2 ... clob1 clob2 ...    ALL OTHER BLOBCLOB COLUMNS  ... Effect These additions define which columns of the database table or the view dbtab are declared as LOB handle components(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-U
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_columns.htm"
abapFile: "abaptypes_lob_handle_columns.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "lob", "handle", "columns"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20lob_handle_columns%2C%20ABAPTYPES_LOB_HANDLE_COLUMNS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, lob\_handle\_columns

Syntax

  ... *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
    *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}* ...

Effect

These additions define which columns of the database table or the view dbtab are declared as [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") when deriving a [LOB handle structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry") using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

-   COLUMNS blob1 blob2 ... clob1 clob2 ...
    
    specifies individual [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") blob1, blob2, ... or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") clob1, clob2, ... These must exist in dbtab.
    
-   ALL OTHER BLOB*|*CLOB COLUMNS
    
    This specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column blob or clob must be specified using COLUMNS ...
    
-   ALL BLOB*|*CLOB COLUMNS
    
    specifies all [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") or [CLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclob_glosry.htm "Glossary Entry") of dbtab.
    
-   ALL OTHER COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab that are not covered when individual columns are specified. In the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm), at least one individual column must be specified using COLUMNS ...
    
-   ALL COLUMNS
    
    This specifies all [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry") in dbtab.
    

No other columns can be specified in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) after the column specification ALL OTHER ...

The combination options of the column specifications with each other below and with the types specified using [lob\_handle\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle_type.htm) are explained in the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Hint

Columns of the data type [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry").

Example

Demonstration of various column specifications in the definition of LOB-Handle components.

TYPES lob\_handle TYPE demo\_lob\_table
                 READER FOR COLUMNS clob1 clob2
                 LOB HANDLE FOR ALL BLOB COLUMNS
                 LOCATOR FOR ALL OTHER CLOB COLUMNS.

Executable Example

[Deriving LOB Handle Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm)


### abentypes_lob_handle_abexa.htm

---
title: "Deriving LOB Handle Structures"
description: |
  This example demonstrates how LOB handle structures(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm 'Glossary Entry') are derived using the statement TYPES(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_lob_handle_abexa.htm"
abapFile: "abentypes_lob_handle_abexa.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abentypes", "lob", "handle", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) →  [TYPES, LOB HANDLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Deriving%20LOB%20Handle%20Structures%2C%20ABENTYPES_LOB_HANDLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Deriving LOB Handle Structures

This example demonstrates how [LOB handle structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_structure_glosry.htm "Glossary Entry") are derived using the statement [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_lob_handle.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_types\_lob\_handle DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES:
      lob\_handle\_structure\_1 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 blob1,
      lob\_handle\_structure\_2 TYPE demo\_lob\_table
                             LOB HANDLE FOR ALL COLUMNS,
      lob\_handle\_structure\_3 TYPE demo\_lob\_table
                             LOCATOR FOR ALL BLOB COLUMNS
                             WRITER FOR ALL CLOB COLUMNS,
      lob\_handle\_structure\_4 TYPE demo\_lob\_table
                             READER FOR COLUMNS clob1 clob2
                             LOB HANDLE FOR ALL BLOB COLUMNS
                             LOCATOR FOR ALL OTHER CLOB COLUMNS,
      lob\_handle\_structure\_5 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1 blob2 blob3
                             LOCATOR FOR COLUMNS clob1 clob2 clob3
                             LOB HANDLE FOR ALL OTHER COLUMNS,
      lob\_handle\_structure\_6 TYPE demo\_lob\_table
                             READER FOR COLUMNS blob1
                             LOCATOR FOR COLUMNS blob2
                             LOB HANDLE FOR COLUMNS blob3
                             LOB HANDLE FOR ALL CLOB COLUMNS.
  PRIVATE SECTION.
    METHODS output\_type IMPORTING struct TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_types\_lob\_handle IMPLEMENTATION.
  METHOD main.
    DO 6 TIMES.
      output\_type( |LOB\_HANDLE\_STRUCTURE\_{ sy-index }| ).
    ENDDO.
  ENDMETHOD.
  METHOD output\_type.
    TYPES: BEGIN OF result,
             component\_name TYPE string,
             absolute\_name  TYPE string,
           END OF result,
           results TYPE TABLE OF result WITH EMPTY KEY.
    out->next\_section( struct
      )->write\_data(
           VALUE results(
             FOR component IN CAST cl\_abap\_structdescr(
               cl\_abap\_structdescr=>describe\_by\_name( struct )
                 )->components
             WHERE ( type\_kind = cl\_abap\_typedescr=>typekind\_oref )
             ( VALUE #(
                 component\_name = component-name
                 absolute\_name  = CAST cl\_abap\_refdescr(
                   cl\_abap\_typedescr=>describe\_by\_name(
                     struct && \`-\` && component-name )
                       )->get\_referenced\_type(
                       )->absolute\_name ) ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

The package-visible area of the class demo\_lob\_handles contains different derivations of LOB handle structures from the database table DEMO\_LOB\_TABLE. The methods of this class are used to output of the static type of the derived [LOB handle components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_component_glosry.htm "Glossary Entry").

The DEMO\_LOB\_TABLE database table contains a key field of type INT4, as well as three columns CLOB1, CLOB2, CLOB3 of type STRING and three columns BLOB1, BLOB2, BLOB3 of type RAWSTRING.

The derivations listed here work as follows:

-   In the structured type lob\_handle\_structure\_1, clob1 and blob1 become LOB handle components by column specifications directly after READER. The component clob1 contains the static type CL\_ABAP\_DB\_C\_READER and blob1 contains the static type CL\_ABAP\_DB\_X\_READER. All other components are represented in accordance with the [regular rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for their built-in types.
-   In the structured type lob\_handle\_structure\_2, all LOB components are converted into LOB handle components by specifying FOR ALL COLUMNS. The static type of the components of type STRING is IF\_ABAP\_DB\_CLOB\_HANDLE and the static type for the components of type RAWSTRING is IF\_ABAP\_DB\_BLOB\_HANDLE.
-   In the structured type lob\_handle\_structure\_3, all LOB components are converted into LOB handle components. The static type of the components of type STRING is converted into CL\_ABAP\_DB\_C\_WRITER by specifying WRITER FOR ALL CLOB COLUMNS and the static type for the components of type RAWSTRING is converted into CL\_ABAP\_DB\_X\_LOCATOR by specifying LOCATOR FOR ALL BLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_4, all LOB components are converted into LOB handle components. The static type of the components clob1 and clob2 is converted into CL\_ABAP\_DB\_C\_READER by specifying READER directly. All components of the type RAWSTRING are converted into reference types for IF\_ABAP\_DB\_BLOB\_HANDLE by specifying LOB HANDLE FOR ALL BLOB COLUMNS. The remaining components of the type STRING are converted into reference types for CL\_ABAP\_DB\_C\_LOCATOR by specifying LOCATOR FOR ALL OTHER CLOB COLUMNS.
-   In the structured type lob\_handle\_structure\_5, all LOB components are listed directly, and thus converted into the corresponding LOB handle components with the static types CL\_ABAP\_DB\_C\_LOCATOR for clob1, clob2, and clob3 and CL\_ABAP\_DB\_X\_READER for blob1, blob2, and blob3. The specification LOB HANDLE FOR ALL OTHER COLUMNS has no direct effect, but only affects any enhancements to the database table with further LOBs, which then preserve their type-compliant interface reference type.
-   In the structured type lob\_handle\_structure\_6, all LOB components are converted into handle LOB components, whereby here the maximum number of column specifications is demonstrated. FOR ALL CLOB COLUMNS can only be specified since no components of type STRING were covered by previous statements.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Expressions (log_exp) / Comparison Expressions (rel_exp) / rel_exp - Comparison Operators / rel_exp - Comparison Operators for All Data Types

**Files**: 7 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

---
title: "Logical Functions"
description: |
  Logical functions are a part of built-in functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm). They are divided into: -   Boolean functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) -   Predicate fun
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogic_functions.htm"
abapFile: "abenlogic_functions.htm"
keywords: ["do", "if", "abenlogic", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Logical%20Functions%2C%20ABENLOGIC_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Logical Functions

Logical functions are a part of [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm). They are divided into:

-   [Boolean functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm)
-   [Predicate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_functions.htm)

Hint

The program DEMO\_EXPRESSIONS shows examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool, Boolean Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm)


### abenboole_functions.htm

---
title: "Effect"
description: |
  The built-in(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) Boolean functions determine the truth value(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm 'Glossary Entry') of a logical expression log_exp(htt
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm"
abapFile: "abenboole_functions.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenboole", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogic_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20boolc%2C%20boolx%2C%20xsdbool%2C%20Boolean%20Functions%2C%20ABENBOOLE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

boolc, boolx, xsdbool, Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The [built-in](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) Boolean functions determine the [truth value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm "Glossary Entry") of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type dependent on the function and expresses the truth value of the logical expression with a value of this type.

Hint

These functions can be considered a partial replacement for the Boolean data type for truth values that is not available in ABAP. In particular, xsdbool and, under certain circumstances, boolc can be used in many operand positions where values of the type abap\_bool of the type pool ABAP are expected.

Variant 1   

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, X is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) and can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Hints

-   If boolc requires return values other than X or blank (for example, Y and N or 1 and 0), the result of boolc can be processed directly using the function [translate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm) or another suitable [processing function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm).
-   The result of boolc should not be compared with the constants abap\_true and abap\_false in relational expressions, since the latter converts from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is to be executed anyway, the function xsdbool can be used instead of boolc whose result has the same ABAP type as abap\_bool.
-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm), since a blank and no empty string is returned. If this is desired, the function xsdbool can be used instead of boolc.
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

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) were executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) were executed. bit expects a data object of the type i. In principle, boolx belongs to the [bit functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) and can be used in all positions where a [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") is also allowed.

Hint

The function boolx can be used for efficient storage of sequences of truth values.

Example

The result of the following [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") is hexadecimal 55, which corresponds to the calculated bit string 01010101.

FINAL(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm).

FINAL(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3   

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value X for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from the ABAP Dictionary. This type, which refers to the identically named domain of type CHAR and length 1, is handled like a real Boolean type in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_schema.htm) using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm). The XML or JSON values true and false are assigned to the values X and blank of this type.

xsdbool can be specified in [general](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Hints

-   The result of xsdbool can be used like a value of the type abap\_bool and can be compared with the constants abap\_true and abap\_false without any problems.
-   If the logical expression is false, the result of boolc fulfills the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm), since the returned blank is the type-dependent initial value at the same time.
-   The result of xsdbool cannot usually be converted directly using a [processing function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) such as [translate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm), since the trailing blanks here are ignored in text fields of type c. The result of a false logical expression would be ignored. The result of the function boolc of type string is better suited for conversions of this type.
-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/TR/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool for whose argument a [predicative method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") is listed. The variable is then serialized to [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasjson_glosry.htm "Glossary Entry") using the predefined [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_id.htm). This produces the value true or false. After a comparison with the identically typed constant abap\_false, the formatted result of the serialization is either read or displayed.

The result would be quite different if boolc were used instead of xsdbool. First, the transformations would have a different result since the values X and blank are not transformed to true or false; second, the logical expression gui\_flag = abap\_false would always be false, since abap\_false loses its blank when converting to the type string.

FINAL(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML FINAL(xml).
FINAL(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
FINAL(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Expressions (log_exp) / Comparison Expressions (rel_exp) / rel_exp - Comparison Operators / rel_exp - Comparison Operators for Character-Like Data Types

**Files**: 3 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

---
title: "Logical Functions"
description: |
  Logical functions are a part of built-in functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm). They are divided into: -   Boolean functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) -   Predicate fun
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogic_functions.htm"
abapFile: "abenlogic_functions.htm"
keywords: ["do", "if", "abenlogic", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Logical%20Functions%2C%20ABENLOGIC_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Logical Functions

Logical functions are a part of [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm). They are divided into:

-   [Boolean functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm)
-   [Predicate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_functions.htm)

Hint

The program DEMO\_EXPRESSIONS shows examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool, Boolean Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm)


### abenboole_functions.htm

---
title: "Effect"
description: |
  The built-in(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) Boolean functions determine the truth value(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm 'Glossary Entry') of a logical expression log_exp(htt
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm"
abapFile: "abenboole_functions.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenboole", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogic_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20boolc%2C%20boolx%2C%20xsdbool%2C%20Boolean%20Functions%2C%20ABENBOOLE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

boolc, boolx, xsdbool, Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The [built-in](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) Boolean functions determine the [truth value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm "Glossary Entry") of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type dependent on the function and expresses the truth value of the logical expression with a value of this type.

Hint

These functions can be considered a partial replacement for the Boolean data type for truth values that is not available in ABAP. In particular, xsdbool and, under certain circumstances, boolc can be used in many operand positions where values of the type abap\_bool of the type pool ABAP are expected.

Variant 1   

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, X is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) and can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Hints

-   If boolc requires return values other than X or blank (for example, Y and N or 1 and 0), the result of boolc can be processed directly using the function [translate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm) or another suitable [processing function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm).
-   The result of boolc should not be compared with the constants abap\_true and abap\_false in relational expressions, since the latter converts from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is to be executed anyway, the function xsdbool can be used instead of boolc whose result has the same ABAP type as abap\_bool.
-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm), since a blank and no empty string is returned. If this is desired, the function xsdbool can be used instead of boolc.
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

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) were executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) were executed. bit expects a data object of the type i. In principle, boolx belongs to the [bit functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) and can be used in all positions where a [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") is also allowed.

Hint

The function boolx can be used for efficient storage of sequences of truth values.

Example

The result of the following [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") is hexadecimal 55, which corresponds to the calculated bit string 01010101.

FINAL(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm).

FINAL(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3   

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value X for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from the ABAP Dictionary. This type, which refers to the identically named domain of type CHAR and length 1, is handled like a real Boolean type in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_schema.htm) using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm). The XML or JSON values true and false are assigned to the values X and blank of this type.

xsdbool can be specified in [general](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Hints

-   The result of xsdbool can be used like a value of the type abap\_bool and can be compared with the constants abap\_true and abap\_false without any problems.
-   If the logical expression is false, the result of boolc fulfills the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm), since the returned blank is the type-dependent initial value at the same time.
-   The result of xsdbool cannot usually be converted directly using a [processing function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) such as [translate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm), since the trailing blanks here are ignored in text fields of type c. The result of a false logical expression would be ignored. The result of the function boolc of type string is better suited for conversions of this type.
-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/TR/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool for whose argument a [predicative method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") is listed. The variable is then serialized to [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasjson_glosry.htm "Glossary Entry") using the predefined [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_id.htm). This produces the value true or false. After a comparison with the identically typed constant abap\_false, the formatted result of the serialization is either read or displayed.

The result would be quite different if boolc were used instead of xsdbool. First, the transformations would have a different result since the values X and blank are not transformed to true or false; second, the logical expression gui\_flag = abap\_false would always be false, since abap\_false loses its blank when converting to the type string.

FINAL(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML FINAL(xml).
FINAL(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
FINAL(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Expressions (log_exp) / Comparison Expressions (rel_exp) / rel_exp - Comparison Rules / rel_exp - Comparing Elementary Data Types / rel_exp - Comparison Type of Calculation Expressions

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

---
title: "Logical Functions"
description: |
  Logical functions are a part of built-in functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm). They are divided into: -   Boolean functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm) -   Predicate fun
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogic_functions.htm"
abapFile: "abenlogic_functions.htm"
keywords: ["do", "if", "abenlogic", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Logical%20Functions%2C%20ABENLOGIC_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Logical Functions

Logical functions are a part of [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm). They are divided into:

-   [Boolean functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm)
-   [Predicate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_functions.htm)

Hint

The program DEMO\_EXPRESSIONS shows examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool, Boolean Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm)


### abenboole_functions.htm

---
title: "Effect"
description: |
  The built-in(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) Boolean functions determine the truth value(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm 'Glossary Entry') of a logical expression log_exp(htt
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboole_functions.htm"
abapFile: "abenboole_functions.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenboole", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogic_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20boolc%2C%20boolx%2C%20xsdbool%2C%20Boolean%20Functions%2C%20ABENBOOLE_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

boolc, boolx, xsdbool, Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The [built-in](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) Boolean functions determine the [truth value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentruth_value_glosry.htm "Glossary Entry") of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type dependent on the function and expresses the truth value of the logical expression with a value of this type.

Hint

These functions can be considered a partial replacement for the Boolean data type for truth values that is not available in ABAP. In particular, xsdbool and, under certain circumstances, boolc can be used in many operand positions where values of the type abap\_bool of the type pool ABAP are expected.

Variant 1   

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, X is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) and can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Hints

-   If boolc requires return values other than X or blank (for example, Y and N or 1 and 0), the result of boolc can be processed directly using the function [translate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm) or another suitable [processing function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm).
-   The result of boolc should not be compared with the constants abap\_true and abap\_false in relational expressions, since the latter converts from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is to be executed anyway, the function xsdbool can be used instead of boolc whose result has the same ABAP type as abap\_bool.
-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm), since a blank and no empty string is returned. If this is desired, the function xsdbool can be used instead of boolc.
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

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) were executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) were executed. bit expects a data object of the type i. In principle, boolx belongs to the [bit functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_functions.htm) and can be used in all positions where a [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") is also allowed.

Hint

The function boolx can be used for efficient storage of sequences of truth values.

Example

The result of the following [bit expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry") is hexadecimal 55, which corresponds to the calculated bit string 01010101.

FINAL(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm).

FINAL(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3   

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value X for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from the ABAP Dictionary. This type, which refers to the identically named domain of type CHAR and length 1, is handled like a real Boolean type in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_asjson_schema.htm) using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation.htm). The XML or JSON values true and false are assigned to the values X and blank of this type.

xsdbool can be specified in [general](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Hints

-   The result of xsdbool can be used like a value of the type abap\_bool and can be compared with the constants abap\_true and abap\_false without any problems.
-   If the logical expression is false, the result of boolc fulfills the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm), since the returned blank is the type-dependent initial value at the same time.
-   The result of xsdbool cannot usually be converted directly using a [processing function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) such as [translate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentranslate_functions.htm), since the trailing blanks here are ignored in text fields of type c. The result of a false logical expression would be ignored. The result of the function boolc of type string is better suited for conversions of this type.
-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/TR/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool for whose argument a [predicative method call](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") is listed. The variable is then serialized to [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasjson_glosry.htm "Glossary Entry") using the predefined [identity transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_id.htm). This produces the value true or false. After a comparison with the identically typed constant abap\_false, the formatted result of the serialization is either read or displayed.

The result would be quite different if boolc were used instead of xsdbool. First, the transformations would have a different result since the values X and blank are not transformed to true or false; second, the logical expression gui\_flag = abap\_false would always be false, since abap\_false loses its blank when converting to the type string.

FINAL(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML FINAL(xml).
FINAL(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
FINAL(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Date and Time Processing / Time Stamps / Time Stamp Fields with Time Stamp Type / Time Stamp Functions (ts_func)

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Date and Time Processing / System Fields for Date and Time

Included pages: 2


### abentime_system_fields.htm

---
title: "System Fields for Date and Time"
description: |
  The following table shows the system fields(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm 'Glossary Entry') that contain information about date and time. System Field Type Length Content GET TIME sy-datlo d - User date(https://help.sap.com/doc/abapd
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_system_fields.htm"
abapFile: "abentime_system_fields.htm"
keywords: ["update", "do", "if", "try", "data", "abentime", "system", "fields"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Fields%20for%20Date%20and%20Time%2C%20ABENTIME_SYSTEM_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Fields for Date and Time

The following table shows the [system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_date_glosry.htm "Glossary Entry")

X

sy-datum

d

\-

[System date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_date_glosry.htm "Glossary Entry")

X

sy-dayst

c

1

Flag for daylight saving time in the [system time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). During daylight saving time, X, otherwise blank.

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). 1 for Monday, ..., 5 for Friday.

\-

sy-timlo

t

\-

[User time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_time_glosry.htm "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry") and [UTC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_glosry.htm "Glossary Entry") reference time in seconds, ignoring daylight saving time.

\-

sy-uzeit

t

\-

[System time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_time_zone_glosry.htm "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") is sent, and when the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") is changed. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time.htm).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_user_time_zones.htm). The local values of sy-datlo and sy-timlo that are related to the user time zone are determined from the [system time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_date_glosry.htm "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") is the same as the [user time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), the corresponding system fields for system date and user date or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time.htm)


### abapget_time.htm

---
title: "GET TIME"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time_shortref.htm) Syntax GET TIME FIELD tim. Addition: ... FIELD tim(#!ABAP_ONE_ADD@1@) Effect Without the addition FIELD, the system fields for date and time(https://help.sap.com/doc/abapdocu_late
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time.htm"
abapFile: "abapget_time.htm"
keywords: ["update", "do", "if", "try", "data", "abapget", "time"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) →  [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_system_fields.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20TIME%2C%20ABAPGET_TIME%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET TIME

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time_shortref.htm)

Syntax

GET TIME *\[*FIELD tim*\]*.

Addition:

[... FIELD tim](#!ABAP_ONE_ADD@1@)

Effect

Without the addition FIELD, the [system fields for date and time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_system_fields.htm), sy-datlo, sy-datum, sy-timlo, and sy-uzeit, are set to the current value. The content of the system fields sy-dayst, sy-fdayw, sy-tzone, and sy-zonlo is not updated.

Hint

Besides with GET TIME, the system fields are updated after a program is started, a [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") is sent, and the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") is changed.

Example

Approximate runtime measurement. The statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_run_time.htm) should be used instead.

GET TIME.
FINAL(t1) = sy-timlo.
DO 5000000 TIMES.
ENDDO.
GET TIME.
FINAL(t2) = sy-timlo.
cl\_demo\_output=>display( t2 - t1 ).

Addition   

... FIELD tim

Effect

The addition FIELD is used to pass the current [system time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry") in the format hhmmss to the variable tim instead of sy-uzeit and none of the system fields are updated. The return value of the statement has the data type t. The following can be specified for tim:

-   An existing variable of the data type t or a variable to which the type t can be converted.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm), where a variable of type t is declared.

Example

The example has the same function as the previous example.

GET TIME.
DO 5000000 TIMES.
ENDDO.
GET TIME FIELD FINAL(time).
cl\_demo\_output=>display( time - sy-uzeit ).


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Date and Time Processing / Time Stamps / Time Stamp Fields with Time Stamp Type / Conversion Statements for Time Stamp Fields

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Date and Time Processing / System Fields for Date and Time

Included pages: 2


### abentime_system_fields.htm

---
title: "System Fields for Date and Time"
description: |
  The following table shows the system fields(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm 'Glossary Entry') that contain information about date and time. System Field Type Length Content GET TIME sy-datlo d - User date(https://help.sap.com/doc/abapd
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_system_fields.htm"
abapFile: "abentime_system_fields.htm"
keywords: ["update", "do", "if", "try", "data", "abentime", "system", "fields"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20System%20Fields%20for%20Date%20and%20Time%2C%20ABENTIME_SYSTEM_FIELDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

System Fields for Date and Time

The following table shows the [system fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") that contain information about date and time.

System Field

Type

Length

Content

GET TIME

sy-datlo

d

\-

[User date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_date_glosry.htm "Glossary Entry")

X

sy-datum

d

\-

[System date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_date_glosry.htm "Glossary Entry")

X

sy-dayst

c

1

Flag for daylight saving time in the [system time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). During daylight saving time, X, otherwise blank.

\-

sy-fdayw

b

\-

Factory calendar weekday in the [system time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_zone_glosry.htm "Glossary Entry"). 1 for Monday, ..., 5 for Friday.

\-

sy-timlo

t

\-

[User time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_time_glosry.htm "Glossary Entry")

X

sy-tzone

i

\-

Time difference between the [system time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry") and [UTC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutc_glosry.htm "Glossary Entry") reference time in seconds, ignoring daylight saving time.

\-

sy-uzeit

t

\-

[System time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry")

X

sy-zonlo

c

6

[User time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_time_zone_glosry.htm "Glossary Entry")

\-

The values of all system fields in this table are set implicitly when the program is started, every time a [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") of a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry") is sent, and when the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") is changed. The last column of the table shows which of the system fields can be updated explicitly using the statement [GET TIME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time.htm).

The content of sy-zonlo is the user time zone described under [System Time Zone and User Time Zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_user_time_zones.htm). The local values of sy-datlo and sy-timlo that are related to the user time zone are determined from the [system time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_date_glosry.htm "Glossary Entry"). If sy-zonlo is initial, sy-timlo and sy-datlo have the same values as sy-uzeit and sy-datum.

Example

If the [system time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") is the same as the [user time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), the corresponding system fields for system date and user date or system time and user time must be the same.

DATA tz TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tz.
IF tz = sy-zonlo.
  ASSERT sy-datum = sy-datlo.
  ASSERT sy-uzeit = sy-timlo.
ENDIF.

Continue
[GET TIME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time.htm)


### abapget_time.htm

---
title: "GET TIME"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time_shortref.htm) Syntax GET TIME FIELD tim. Addition: ... FIELD tim(#!ABAP_ONE_ADD@1@) Effect Without the addition FIELD, the system fields for date and time(https://help.sap.com/doc/abapdocu_late
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time.htm"
abapFile: "abapget_time.htm"
keywords: ["update", "do", "if", "try", "data", "abapget", "time"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Date and Time Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_time_processing.htm) →  [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_system_fields.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20TIME%2C%20ABAPGET_TIME%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET TIME

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_time_shortref.htm)

Syntax

GET TIME *\[*FIELD tim*\]*.

Addition:

[... FIELD tim](#!ABAP_ONE_ADD@1@)

Effect

Without the addition FIELD, the [system fields for date and time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_system_fields.htm), sy-datlo, sy-datum, sy-timlo, and sy-uzeit, are set to the current value. The content of the system fields sy-dayst, sy-fdayw, sy-tzone, and sy-zonlo is not updated.

Hint

Besides with GET TIME, the system fields are updated after a program is started, a [screen layout](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_glosry.htm "Glossary Entry") is sent, and the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") is changed.

Example

Approximate runtime measurement. The statement [GET RUN TIME](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_run_time.htm) should be used instead.

GET TIME.
FINAL(t1) = sy-timlo.
DO 5000000 TIMES.
ENDDO.
GET TIME.
FINAL(t2) = sy-timlo.
cl\_demo\_output=>display( t2 - t1 ).

Addition   

... FIELD tim

Effect

The addition FIELD is used to pass the current [system time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_time_glosry.htm "Glossary Entry") in the format hhmmss to the variable tim instead of sy-uzeit and none of the system fields are updated. The return value of the statement has the data type t. The following can be specified for tim:

-   An existing variable of the data type t or a variable to which the type t can be converted.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm), where a variable of type t is declared.

Example

The example has the same function as the previous example.

GET TIME.
DO 5000000 TIMES.
ENDDO.
GET TIME FIELD FINAL(time).
cl\_demo\_output=>display( time - sy-uzeit ).


---


## ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

---
title: "Obsolete Type Reference"
description: |
  -   Obsolete use of LIKE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm) LIKE, Obsolete(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm)
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_typing.htm"
abapFile: "abenobsolete_typing.htm"
keywords: ["do", "if", "abenobsolete", "typing"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Type%20Reference%2C%20ABENOBSOLETE_TYPING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Type Reference

-   [Obsolete use of LIKE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm)

Continue
[LIKE, Obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm)


### abenlike_obsolete.htm

---
title: "LIKE, Obsolete"
description: |
  Obsolete Syntax ... LIKE dtype ... Effect Outside of classes, the addition LIKE can be used to refer to flat(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm 'Glossary Entry') structures in the ABAP Dictionary(https://help.sap.com/doc/abapdocu_latest_index_htm/
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlike_obsolete.htm"
abapFile: "abenlike_obsolete.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenlike", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Type Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_typing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LIKE%2C%20Obsolete%2C%20ABENLIKE_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LIKE, Obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can be used to refer to [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") structures in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") and their components, as well as the properties of data objects. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following uses of LIKE:

-   in the declarative statements [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdata.htm), and so on.
-   in [complete typings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_complete.htm)
-   in the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapparameters_type.htm)

If there is a data object with the name dtype in a local context, then this object hides the data type from the ABAP Dictionary.

Hints

-   The addition LIKE should only be used to refer to data objects.
-   It is neither possible to make a LIKE reference to a [CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") entity, nor to make a LIKE reference to a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") ([obsolete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_obsolete.htm)).
-   For a reference to data types, the addition TYPE should always be used.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.


---
