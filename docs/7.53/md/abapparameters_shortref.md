  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  P

PARAMETERS - Quick reference

[Reference](javascript:call_link\('abapparameters.htm'\))

Syntax

PARAMETERS *{* *{*para*\[*(len)*\]**}* *|* *{*para *\[*LENGTH len*\]**}* *}*
           *\[* *{*TYPE type *\[*DECIMALS dec*\]**}*
           *|* *{*LIKE dobj*}*
           *|* *{*LIKE (name)*}* *\]*
           *\[* *{**\[*OBLIGATORY*|*NO-DISPLAY*\]* *\[*VISIBLE LENGTH vlen*\]**}*
           *|* *{*AS CHECKBOX *\[*USER-COMMAND fcode*\]**}*
           *|* *{*RADIOBUTTON GROUP group *\[*USER-COMMAND fcode*\]**}*
           *|* *{*AS LISTBOX VISIBLE LENGTH vlen
                *\[*USER-COMMAND fcode*\]* *\[*OBLIGATORY*\]**}* *\]*
           *\[*MODIF ID modid*\]*
           *\[*DEFAULT val*\]*
           *\[*LOWER CASE*\]*
           *\[*MATCHCODE OBJECT search\_help*\]*
           *\[*MEMORY ID pid*\]*
           *\[*VALUE CHECK*\]*
           *\[*FOR *{*TABLE*|*NODE*}* node
              *\[*HELP-REQUEST*\]*
              *\[*VALUE-REQUEST*\]*
              *\[*AS SEARCH PATTERN*\]**\]*.

Effect

Declares a parameter para of length len and creates an associated input field on the current [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry").

Additions

-   [TYPE type *\[*DECIMALS dec*\]*](javascript:call_link\('abapparameters_type.htm'\))
    Specifies the data type type directly and defines the number of [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry").
    
-   [LIKE dobj](javascript:call_link\('abapparameters_type.htm'\))
    Specifies the data type with reference to a data object dobj.
    
-   [LIKE (name)](javascript:call_link\('abapparameters_type.htm'\))
    Defines the data type for c with length 132, and displays the input field in accordance with the type specified dynamically in name.
    
-   [OBLIGATORY](javascript:call_link\('abapparameters_screen.htm'\))
    Defines the input field as a mandatory field.
    
-   [NO-DISPLAY](javascript:call_link\('abapparameters_screen.htm'\))
    No input field is created on the selection screen.
    
-   [VISIBLE LENGTH vlen](javascript:call_link\('abapparameters_screen.htm'\))
    Sets the visible length of the input field to the value of vlen.
    
-   [AS CHECKBOX](javascript:call_link\('abapparameters_screen.htm'\))
    Creates the input field as a checkbox.
    
-   [RADIOBUTTON GROUP group](javascript:call_link\('abapparameters_screen.htm'\))
    Creates the input field as a radio button of the radio button group group.
    
-   [AS LISTBOX](javascript:call_link\('abapparameters_screen.htm'\))
    Creates a [dropdown list box](javascript:call_link\('abendropdown_listbox_glosry.htm'\) "Glossary Entry") for the input field.
    
-   [USER-COMMAND fcode](javascript:call_link\('abapparameters_screen.htm'\))
    Associates the input field with a [function code](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry").
    
-   [MODIF ID modid](javascript:call_link\('abapselection-screen_modif_id.htm'\))
    Assigns the input field to the [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.
    
-   [DEFAULT val](javascript:call_link\('abapparameters_value.htm'\))
    Defines a [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") val for the content of the parameter.
    
-   [LOWER CASE](javascript:call_link\('abapparameters_value.htm'\))
    Prevents the conversion of the content of character-like fields to uppercase when transferring data between the input field and the data object.
    
-   [MATCHCODE OBJECT search\_help](javascript:call_link\('abapparameters_value.htm'\))
    Associates the input field with a search help search\_help from [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").
    
-   [MEMORY ID pid](javascript:call_link\('abapparameters_value.htm'\))
    Associates the input field with the [SPA/GPA parameter](javascript:call_link\('abenspa_gpa_parameter_1_glosry.htm'\) "Glossary Entry") pid in the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry").
    
-   [VALUE CHECK](javascript:call_link\('abapparameters_value.htm'\))
    Checks the input value against type-specific requirements in ABAP Dictionary.
    
-   [FOR *{*TABLE*|*NODE*}* node](javascript:call_link\('abapparameters_ldb.htm'\))
    Obsolete: Assigns parameters in a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") to a node node of the associated structure.
    
-   [*\[*HELP-REQUEST*\]* *\[*VALUE-REQUEST*\]*](javascript:call_link\('abapparameters_ldb.htm'\))
    Obsolete: Enables self-defined field helps and input helps in logical databases for the input field.
    
-   [AS SEARCH PATTERN](javascript:call_link\('abapparameters_ldb.htm'\))
    Obsolete: Enables evaluation of a search help in logical databases.