  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) → 

DDIC - Semantic Attributes of Data Elements

The semantic attributes of data elements are mainly significant when they are used as types of fields on user interfaces such as [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") (or [Web Dynpro](javascript:call_link\('abenweb_dynpro_glosry.htm'\) "Glossary Entry")) fields . The only exceptions to this are the default component name and the flag for the change document. ABAP data objects declared with reference to a data element ignore the semantic attributes of the element.

-   Short text
    
    Short text of the data element. The short text assigned to a data element appears as a header in a [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element.
    
-   Field label
    
    The short, medium, and long field labels assigned to a data element, as well as a header, can be created where appropriate as descriptions or column headers of lists for fields on screens of dynpros or Web Dynpros with direct or indirect reference to the data element. A freely definable maximum length with varying upper limits for the different field labels is applied to all languages and must be set accordingly.
    
-   Documentation
    
    Documentation of the data element. The documentation created for a data element appears by default as [field help](javascript:call_link\('abenfield_help_glosry.htm'\) "Glossary Entry") for all dynpro fields or Web Dynpro fields defined with a direct or indirect reference to the data element. If no documentation was created, only the short text appears.
    
-   Supplementary documentation
    
    Additional supplementary documentation objects can be created for a data element, with each documentation object identified by a four-digit number. This supplementary documentation can be used for program-specific and dynpro-specific [field helps](javascript:call_link\('abendynp_field_help.htm'\)). The assignment of supplementary documentation to a dynpro field is stored in the DDIC database table THLPF.
    
-   Documentation status
    
    The status of the documentation for a data element can be noted as follows for any check tools:
    
    -   Object is documented
        
        The default setting, indicating that the data element requires documentation.
        
    -   Object not used on a screen
        
        The data element is not intended for screen fields of dynpro fields or Web Dynpro fields and no further documentation is required.
        
    -   Object is documented by its short text.
        
        The short text provides enough documentation.
        
    -   Documentation is currently on hold
        
        The data element requires documentation, but it does not yet exist.
        
-   Search help
    
    A data element with an elementary data type can be assigned a [search help](javascript:call_link\('abensearch_help_glosry.htm'\) "Glossary Entry") and a parameter can be passed to this search help.
    
    This search help is used for the [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") of all dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element, unless the dynpro field is itself linked with a search help. Search helps cannot be assigned to a data element with a reference type.
    
-   SPA/GPA parameter
    
    A data element with an elementary data type can be linked with an [SPA/GPA parameter](javascript:call_link\('abenspa_gpa.htm'\)).
    
    Dynpro fields defined with direct or indirect reference to the data element can be filled with the content of the parameter, unless the dynpro field is itself linked with an SPA/GPA parameter. A data element with a reference type cannot be linked with an SPA/GPA parameter.
    
-   Flag for input history
    
    The flag for the input history defines whether the input history in SAP GUI is active for dynpro fields defined with direct or indirect reference to the data element. This makes it possible to switch the input history off for sensitive fields.
    
-   Flag for bidirectional fonts
    
    This flag defines the behavior of dynpro fields or Web Dynpro fields defined with direct or indirect reference to the data element when handling bidirectional fonts (such as Hebrew or Arabic).
    
    -   Writing direction
        
        This flag can specify the writing direction of a dynpro field as "from left to right", which overwrites the direction "from right to left" specified by logons in a bidirectional font. This flag can be useful for fields with numeric texts.
        
    -   BIDI filter
        
        This flag can be used to prevent the Unicode formatting characters that affect the writing direction of bidirectional fonts in data transports between GUI and AS ABAP from being filtered out, regardless of the global system settings. The global system setting is made in the program I18N\_SET\_DATAELEMENT\_FLAGS.
        
-   Default component name
    
    The default component name of a data element is a naming suggestion for structure components or table fields defined with reference to this data element. Structures used in APIs in particular should follow this proposal.
    
-   Flag for change document
    
    The flag for change documents specifies whether changes to fields in DDIC database tables defined with reference to this data element are logged when change document objects are involved. A change document object groups multiple tables and is used to generate function modules that can be integrated into ABAP programs and that log changes. This flag cannot be set for data elements with a reference type.
    
-   Further semantic attributes can be defined in the [domain](javascript:call_link\('abenddic_domains.htm'\)) referenced by a data element.

The texts in the semantic attributes (the short text, field labels, and documentation) are, like all AS ABAP texts, connected to the translation tools.

Hint

It is highly significant that many semantic attributes of a data element define the behavior of dynpro fields or Web Dynpro fields. For example, a data element whose documentation describes the internal attributes of a technical type is not usually suitable for use in UI fields. One example are the data elements SYST\_... that define the components of the system structure SYST. The documentation of these data elements describes the corresponding system fields and should not appear on a UI. Ideally, separate data elements are created with their own semantic attributes for UIs and DDIC database tables. Any data elements not used for UI fields do not usually require semantic attributes except for the short text and possibly documentation if this is not sufficient. Conversely, attributes such as the flag for change documents are not relevant for data elements for interfaces.