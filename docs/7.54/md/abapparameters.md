  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) → 

PARAMETERS

[Quick Reference](javascript:call_link\('abapparameters_shortref.htm'\))

Syntax

PARAMETERS *{*para*\[*(len)*\]**}**|**{*para *\[*LENGTH len*\]**}*
           *\[*[type\_options](javascript:call_link\('abapparameters_type.htm'\))*\]*
           *\[*[screen\_options](javascript:call_link\('abapparameters_screen.htm'\))*\]*
           *\[*[value\_options](javascript:call_link\('abapparameters_value.htm'\))*\]*
           *\[*[ldb\_options](javascript:call_link\('abapparameters_ldb.htm'\))*\]*.

Effect

Declares a parameter para of length len. Parameters are components of a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") that are assigned a global elementary data object in the ABAP program and an input field on the selection screen.

The name of the parameter para can contain a maximum of eight characters. This statement is allowed in the global declaration part of [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry"), [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), and [module pools](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry"). In function groups and module pools, the statement is only allowed within the definition of a [standalone selection screen](javascript:call_link\('abapselection-screen_definition.htm'\)). In executable programs, the statement is otherwise automatically assigned to the [standard selection screen](javascript:call_link\('abapselection-screen_standard.htm'\)).

The length len can only be specified if the data type specified in [type\_options](javascript:call_link\('abapparameters_type.htm'\)) has a generic length (c, n, p, and x). The length len must be specified directly as a number or as a numeric constant within the [length range](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) defined for the type in question. If len is not specified, the length is set to 1 for a generic data type; otherwise it is set to the length of the data type.

The statement PARAMETERS has the following effect:

-   The statement declares a global variable (para) of the specified length in the program. The type of the data object is specified in [type\_options](javascript:call_link\('abapparameters_type.htm'\)).
    
-   An input field with the same name and a suitable external data type is created in a new row at position 35 on the current selection screen. The length of the input field is determined by the length of the parameter. The maximum length of the input field is 255. The maximum visible length of the input field is between 39 and 45 (depending on the nesting depth in framed blocks). If the length len is greater than the maximum visible length, the content is displayed as movable.
    An output field generated automatically is displayed in the first position available to the left of the input field as a description with a length of between 23 and 30, depending on the nesting depth in blocks with frames. The output field contains either the name of the parameter para or the selection text to which the parameter is assigned in the text elements of the program. If the user requests a field help or input help in the output field by pressing F1 or F4, the same data is displayed as when the input field itself is selected.
    The attributes of the elements on the selection screen can be modified in [screen\_options](javascript:call_link\('abapparameters_screen.htm'\)) and with the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) .
    
-   Before the selection screen is sent, the content of the para data object is transported to the input field on the selection screen and a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") may be executed. If the length of the parameter is greater than 255, the content is truncated from the right. Settings can be configured for the content of the input field in [value\_options](javascript:call_link\('abapparameters_value.htm'\)). After a user action on the selection screen, the content of the input field is transported to the data object and the content of character-like fields is converted to uppercase by default. A conversion routine may then be executed. Various [selection screen events](javascript:call_link\('abapat_selection-screen_events.htm'\)) are raised after the transport.
    
-   If parameters are defined in the selection include of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), further [ldb\_options](javascript:call_link\('abapparameters_ldb.htm'\)) additions are necessary or possible.
    

Notes

-   If a parameter is given data using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) when an executable program is called, a [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") may also be called and the content truncated on the right at position 255. The conversion routine is skipped and the content not truncated only if the parameter is declared with the addition [NO-DISPLAY](javascript:call_link\('abapparameters_screen.htm'\)).
    
-   To ensure legibility, it is best to specify a length for the generic types and always use the addition LENGTH instead of parentheses.
    
-   The name of a parameter must not be one of the keywords of the dynpro flow logic (MODULE, SELECT, or VALUES).
    
-   If the parameter is a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") which does not refer to a data type in ABAP Dictionary, the output style scaling retained is set for the entry field on the selection screen, which means that closing zeros are retained after the decimal point. If there is a reference to a data type in the ABAP Dictionary, the output style defined there is used.
    
-   If the type of the parameter is a [packed number](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry") or a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary, the attribute sign must be set for the type attribute, so that negative numbers can be displayed on the selection screen. This setting is only possible for [domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") and not for specifying a built-in type directly for [data elements](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") or structure components. If a negative number is entered on the selection screen and this property is not set, the system rejects it with an error message. If the parameter contains a negative number when the selection screen is called, an unhandleable exception occurs.
    
-   If the parameter type is a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") defined in ABAP Dictionary for which the output style "currency amount" is specified, only numbers with the corresponding amount of decimal places can be entered on the selection screen. If the associated ABAP data object is a number with more decimal places when the selection screen is called, a non-handleable exception is raised. If the output style is "extended currency amount", additional decimal places can be displayed.
    

Continue
[PARAMETERS - type\_options](javascript:call_link\('abapparameters_type.htm'\))
[PARAMETERS - screen\_options](javascript:call_link\('abapparameters_screen.htm'\))
[PARAMETERS - value\_options](javascript:call_link\('abapparameters_value.htm'\))