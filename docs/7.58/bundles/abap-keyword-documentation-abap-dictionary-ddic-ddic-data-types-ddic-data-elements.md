# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Data Types / DDIC - Data Elements

Included pages: 7


### abenddic_data_elements.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Data%20Elements%2C%20ABENDDIC_DATA_ELEMENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Data Elements

A [DDIC data element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_element_glosry.htm "Glossary Entry") defines an [elementary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_type_glosry.htm "Glossary Entry"). DDIC data elements describe the technical type properties and the semantic meaning of an object that is defined with reference to the data element. Data elements are the elementary components of complex types such as [DDIC structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_structures.htm), [DDIC table types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_table_types.htm), or [DDIC database tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm). An object which is declared program-internally with reference to a data element always has one of the elementary built-in ABAP types. The type in question is defined by the mapping of the [built-in types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary to ABAP types.

-   [Technical properties of data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements_tech.htm)
-   [Semantic properties of data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements_sema.htm)

Hints

-   [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") offer [CDS simple types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_type_glosry.htm "Glossary Entry") for defining [elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") natively in ABAP CDS. CDS simple types can be enriched with semantic information using [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry"). This semantic information is evaluated by frameworks such as the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarap_glosry.htm "Glossary Entry") when a simple type is used for typing. Moreover, simple types can be nested within each other and therefore offer advanced reuse capabilities compared to DDIC data elements.
-   The technical properties of a data element can be defined either directly or by using a reusable [domain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm). This is why the concept is known as a two-level domain concept.
-   The name of a data element must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_types_names.htm).
-   Data elements can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) and in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Properties of Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements_tech.htm)
[DDIC - Semantic Properties of Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements_sema.htm)
[DDIC - Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm)


### abenddic_data_elements_tech.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Technical%20Properties%20of%20Data%20Elements%2C%20ABENDDIC_DATA_ELEMENTS_TECH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

DDIC - Technical Properties of Data Elements

A data element describes an [elementary data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") or a [reference type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_type_glosry.htm "Glossary Entry") with the following technical properties:

-   Elementary type
    
    A data element that describes an elementary type has a [built-in data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) from the ABAP Dictionary, a length, and, if necessary, a number of decimal places as its technical properties. These technical properties are defined either directly in the data element or they are inherited from a [domain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm).
    
-   Reference type
    
    A data element that describes a reference type is either a type for a [data reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_reference_variable_glosry.htm "Glossary Entry") or for an [object reference variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobject_refer_variable_glosry.htm "Glossary Entry").
    
    -   The [static type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_type_glosry.htm "Glossary Entry") for a data reference variable is either the generic type DATA, any existing data type from the ABAP Dictionary (including [DDIC database tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables.htm) or [views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_views.htm)), or a directly specified [built-in data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm).
    -   The [static type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_type_glosry.htm "Glossary Entry") for an object reference variable is either the generic type OBJECT or an existing global class or a global interface from the [class library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_library_glosry.htm "Glossary Entry").

Hints

-   When existing data elements are modified, all consumers of the data element are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_adj.htm) necessary.
-   Global reference types from the ABAP Dictionary can be used for typing in ABAP programs. They cannot, however, be used for fields of database tables or for elements of CDS entities.

Example

The data element S\_CONN\_ID inherits its technical properties (data type NUMC, length 4) from the domain S\_CONN\_ID. The data element S\_CONN\_ID has documentation and further texts that describe its semantics. It is used as a data type of many table fields that match these semantic properties, such as the column CONNID of the DDIC database tables SPFLI, SBOOK, and SFLIGHT.


### abenddic_data_elements_sema.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Semantic%20Properties%20of%20Data%20Elements%2C%20ABENDDIC_DATA_ELEMENTS_SEMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

DDIC - Semantic Properties of Data Elements

The semantic properties of data elements are mainly significant when they are used as types of fields on user interfaces such as [dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") or [Web Dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenweb_dynpro_glosry.htm "Glossary Entry"). The only exceptions to this are the default component name and the flag for the change document. ABAP data objects declared with reference to a data element ignore the semantic properties of the data element.

-   Short text
    
    Short text of the data element. The short text of a data element appears as a header in a [field help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_help_glosry.htm "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element.
    
-   Field label
    
    The short, medium, and long field labels assigned to a data element, as well as the header, can be used on screens of dynpros or Web Dynpros as descriptions or column names for fields defined with direct or indirect reference to a data element. A user-defined maximum length, which has varying upper limits for the different field labels, must be set. It applies to all languages.
    
-   Documentation
    
    Documentation of the data element. The documentation created for a data element appears by default as [field help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_help_glosry.htm "Glossary Entry") for all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element. If no documentation was created, only the short text appears.
    
-   Supplementary documentation
    
    A data element can have supplementary documentation objects, with each documentation object identified by a four-digit number. This supplementary documentation can be used for program-specific and dynpro-specific [field helps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynp_field_help.htm). The assignment of supplementary documentation to a dynpro field is stored in the DDIC database table THLPF.
    
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
    
    A data element with an elementary data type can be assigned a [search help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensearch_help_glosry.htm "Glossary Entry") and a parameter can be passed to this search help.
    
    This search help is used for the [input help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_help_glosry.htm "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element, unless the dynpro field is itself linked with a search help. Search helps cannot be assigned to a data element with a reference type.
    
-   SPA/GPA parameter
    
    A data element with an elementary data type can be linked with an [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenspa_gpa.htm).
    
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
    
-   Further semantic properties can be defined in the [domain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm) referenced by a data element.

The texts in the semantic properties (the short text, field labels, and documentation) are, like all AS ABAP texts, connected to the translation tools.

Hint

Consumers must consider that many semantic properties of a data element define the behavior of dynpro fields or Web Dynpro fields. For example, a data element whose documentation describes the internal properties of a technical type is not usually suitable for use in UI fields. One example are the data elements SYST\_... that define the components of the system structure SYST. The documentation of these data elements describes the corresponding system fields and should not appear on a UI. Ideally, separate data elements with different semantic properties are created for UIs, use in programs, and DDIC database tables. Any data elements not used for UI fields do not usually require semantic properties except for the short text and possibly documentation if the short text is not sufficient. Conversely, properties such as the flag for change documents are not relevant for data elements for UIs.


### abenddic_domains.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Domains%2C%20ABENDDIC_DOMAINS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Domains

A [DDIC domain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendomain_glosry.htm "Glossary Entry") is a standalone dictionary object that defines technical and semantic properties of elementary data types. [Data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) can be defined with reference to a domain and inherit the properties defined there. Domains can only be used in DDIC data elements. A domain can be used by any number of data elements.

-   [Technical properties of domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_tech.htm)
-   [Semantic properties of domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_sema.htm)

The name of a domain must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_types_names.htm) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains should not occur within an application component or a package. Domains that only have technical properties should be created as reusable domains in central basis packages. One example is the domain CHAR255.
-   The [fixed values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as special kinds of literals in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   As of ABAP release 7.58, [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") offer [CDS enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") for defining [enumerated data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry") natively in ABAP CDS. CDS enumerated types provide functionality similar to domains with [fixed values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_value_glosry.htm "Glossary Entry") and are recommended when working with data models in ABAP CDS.
-   A domain determines properties of an elementary data type but is not a data type itself. A domain cannot be specified after a TYPE addition in ABAP.
-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) and in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Properties of Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_tech.htm)
[DDIC - Semantic Properties of Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_sema.htm)


### abenddic_domains_tech.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Technical%20Properties%20of%20Domains%2C%20ABENDDIC_DOMAINS_TECH%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

DDIC - Technical Properties of Domains

The only technical property of a domain is the description of an elementary data type whose following technical properties are defined directly in the domain:

-   [Built-in data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary
-   Length
-   A number of decimal places (optional)

Hint

When existing domains are modified, all users of the domain are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for the fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_adj.htm) necessary.


### abenddic_domains_sema.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Semantic%20Properties%20of%20Domains%2C%20ABENDDIC_DOMAINS_SEMA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Semantic Properties of Domains

Domains can have the following semantic properties:

-   Short text
    
    A descriptive short text must be specified when a domain is created.
    
-   Documentation
    
    Documentation can optionally be assigned. This documentation can be read as required.
    
-   Output properties
    
    The output properties affect how fields defined with reference to a data element that references the domain are displayed on [dynpros or Web Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry") or when formatted with the statements [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm).
    
    -   Output length
        
        The optional output length overrides the [implicit output length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_output_length.htm) as assigned to the built-in elementary data types. The possible output length is determined by the data type and is checked by the ABAP Dictionary [tools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm). If a format is assigned to the built-in data type used, the output length should be long enough for all formatting characters.
        
    -   Output style
        
        A domain with the type of a decimal floating point number must be assigned an [output style](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_decimal_floating_point.htm).
        
    -   Conversion exit
        
        If a domain is assigned to a [conversion exit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_exit_glosry.htm "Glossary Entry"), the associated [conversion routine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_routine_glosry.htm "Glossary Entry") (function module) ...\_INPUT for each input in a [dynpro field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_field_glosry.htm "Glossary Entry") and ...\_OUTPUT for each output using a dynpro field that is defined with reference to a data element that itself references the domain is called. The function module ...\_OUTPUT is executed when a data object is formatted using [WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm) when the data object in question is declared with reference to a data element that itself references the domain.
        
    -   Sign
        
        If a [dynpro field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_field_glosry.htm "Glossary Entry") has a numeric DDIC data type, the Sign property must be set so that negative numbers can be displayed on the screen. This property can only be specified using a domain.
        
    -   Lowercase letters
        
        If a [dynpro field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_field_glosry.htm "Glossary Entry") has a character-like DDIC data type, the Lowercase Letters property can be set so that these letters are not transformed to uppercase. This property can only be specified using a domain.
        
    -   Time format
        
        For the data type [TIMS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm), a 24-hour or 12-hour format can be set for displaying dynpro fields in accordance with the ABAP [time formats](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_formats.htm).
        
-   Value range
    
    Value ranges for fields on user interfaces can be defined for domains of the [built-in types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) CHAR, NUMC, DEC, INT1, INT2, INT4, and INT8. For domains of the types CHAR and NUMC, this range specifies the valid input values in dynpro fields defined with reference to a data element of such a domain. The value range is evaluated for all types for the [input help](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_help_glosry.htm "Glossary Entry") of [dynpro fields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_field_glosry.htm "Glossary Entry") if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of DDIC database table fields that reference a data element with a domain of this type. A value range can be defined using the following:
    
    -   Fixed values
    -   Intervals
    
    Fixed values and intervals can be combined in any way. The following can be specified as fixed values and interval limits:
    
    -   Alphanumeric characters including blanks and special characters for the type CHAR. The length is restricted to 10.
    -   Positive integers (including 0) for the types NUMC, INT1, INT2, INT4, INT8, and DEC within the [value range](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) defined by the technical properties.
    
    A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special kinds of [literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v1.htm) in a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The fixed values provided by SAP can be extended by customers or partners using [fixed value appends](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_fixed_value_appends.htm).
    
-   Value table
    
    A value table can be a DDIC database table that is used as a default for the [check table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_checktab.htm) in cases where a table field of a DDIC database table that references a data element with this domain is included in a [foreign key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_forkey.htm). Specifying a value table alone does not trigger a check.
    

Example

The domain S\_CLASS with the type CHAR describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values C (Business Class), F (First Class), and Y (Economy Class). This means that only the values C, F, and Y can be entered for all dynpro fields that refer to this domain.


### abenddic_domains.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Domains%2C%20ABENDDIC_DOMAINS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Domains

A [DDIC domain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendomain_glosry.htm "Glossary Entry") is a standalone dictionary object that defines technical and semantic properties of elementary data types. [Data elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_data_elements.htm) can be defined with reference to a domain and inherit the properties defined there. Domains can only be used in DDIC data elements. A domain can be used by any number of data elements.

-   [Technical properties of domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_tech.htm)
-   [Semantic properties of domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_sema.htm)

The name of a domain must follow the [naming rules for DDIC data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_types_names.htm) but it is located in a different namespace from data types. A domain can have the exact same name as a data type and, more particularly, a data element.

Hints

-   Redundant domains should not occur within an application component or a package. Domains that only have technical properties should be created as reusable domains in central basis packages. One example is the domain CHAR255.
-   The [fixed values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as special kinds of literals in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry").
-   As of ABAP release 7.58, [ABAP Core Data Services](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_core_data_services_glosry.htm "Glossary Entry") offer [CDS enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_type_glosry.htm "Glossary Entry") for defining [enumerated data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry") natively in ABAP CDS. CDS enumerated types provide functionality similar to domains with [fixed values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_value_glosry.htm "Glossary Entry") and are recommended when working with data models in ABAP CDS.
-   A domain determines properties of an elementary data type but is not a data type itself. A domain cannot be specified after a TYPE addition in ABAP.
-   Domains can be maintained in form-based tools both in the ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_tools.htm) and in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry").

Continue
[DDIC - Technical Properties of Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_tech.htm)
[DDIC - Semantic Properties of Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains_sema.htm)
