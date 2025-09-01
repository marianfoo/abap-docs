  

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