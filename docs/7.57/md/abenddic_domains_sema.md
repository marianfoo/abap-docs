  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [DDIC - Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Semantic Properties of Domains, ABENDDIC_DOMAINS_SEMA, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Semantic Properties of Domains

Domains can be given the following semantic properties:

-   Short text
    
    Each domain is assigned a descriptive short text that must be specified when it is created.
    
-   Documentation
    
    A domain can be assigned documentation that can be read as required.
    
-   Output properties
    
    The output properties affect how fields defined with reference to a data element that references the domain are displayed on [dynpros or Web Dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") or when formatted with the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)).
    
    -   Output length
        
        The optional output length overrides the [implicit output length](javascript:call_link\('abenwrite_output_length.htm'\)) as assigned to the built-in elementary data types. The possible output length is determined by the data type and is checked by the ABAP Dictionary [tools](javascript:call_link\('abenddic_tools.htm'\)). If a format is assigned to the built-in data type used, the output length should be long enough for all formatting characters.
        
    -   Output style
        
        A domain with the type of a decimal floating point number must be assigned an [output style](javascript:call_link\('abenddic_decimal_floating_point.htm'\)).
        
    -   Conversion routine
        
        If a domain is assigned to a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry"), the associated function module ...\_INPUT for each input in a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") and ...\_OUTPUT is called for each output using a dynpro field that is defined with reference to a data element that itself references the domain. The function module ...\_OUTPUT is executed in the same way when a data object is formatted using [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) when the data object is declared with reference to a data element of this type.
        
    -   Sign
        
        If a data type of a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") defined in the ABAP Dictionary is numeric, the "Sign" property must be set so that negative numbers can be displayed on the screen. This property can only be specified using a domain.
        
    -   Lowercase letters
        
        If a data type of a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") defined in the ABAP Dictionary is character-like, the "Lowercase Letters" property can be set so that these letters are not transformed to uppercase. This property can only be specified using a domain.
        
    -   Time format
        
        For the data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), a 24-hour or 12-hour format can be set for displaying dynpro fields in accordance with the ABAP [time formats](javascript:call_link\('abentime_formats.htm'\)).
        
-   Value range
    
    Value ranges for fields on user interfaces can be defined for domains of the [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, NUMC, DEC, INT1, INT2, INT4, and INT8. For domains of the types CHAR and NUMC, this range specifies the valid input values in dynpro fields defined with reference to a data element of such a domain. The value range is evaluated for all types for the [input help](javascript:call_link\('abeninput_help_glosry.htm'\) "Glossary Entry") of [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") if no input help with a higher priority exists. The value range is ignored for the content of data objects in ABAP programs or of DDIC database table fields that reference a data element with a domain of this type. A value range can be defined using the following:
    
    -   Fixed values
    -   Intervals
    
    Fixed values and intervals can be combined in any way. The following can be specified as fixed values and interval limits:
    
    -   Alphanumeric characters including blanks and special characters for the type CHAR. The length is restricted to 10.
    -   Positive integers (including 0) for the types NUMC, INT1, INT2, INT4, INT8, and DEC within the [value range](javascript:call_link\('abenddic_builtin_types.htm'\)) defined by the technical properties.
    
    A short text can be specified for each fixed value or interval, which is then displayed when used in an input help. The fixed values of a domain can be specified as special [literals](javascript:call_link\('abencds_literal_v1.htm'\)) in a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The fixed values provided by SAP can be enhanced by customers or partners using [fixed value appends](javascript:call_link\('abenddic_fixed_value_appends.htm'\)).
    
-   Value table
    
    A value table can be a DDIC database table that is used as a default for the [check table](javascript:call_link\('abenddic_database_tables_checktab.htm'\)) in cases where a table field of a DDIC database table that references a data element with this domain is included in a [foreign key](javascript:call_link\('abenddic_database_tables_forkey.htm'\)). Specifying a value table alone does not trigger a check.
    

Example

The domain S\_CLASS with the type CHAR describes the possible classes in a flight booking. The value range of the domain is defined by the fixed values "C" (Business Class), "F" (First Class), and "Y" (Economy Class). This means that only the values "C", "F", and "Y" can be entered for all dynpro fields that refer to this domain.