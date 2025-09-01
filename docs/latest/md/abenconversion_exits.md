  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conversion%20Exits%2C%20ABENCONVERSION_EXITS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Conversion Exits

A [conversion exit](javascript:call_link\('abenconversion_exit_glosry.htm'\) "Glossary Entry") overrides standard conversions that take place when values are passed from an ABAP data object to a dynpro field or from a dynpro field to an ABAP data object and in the formatting of data using the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) and [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)).

-   [Properties of Conversion Exits](#abenconversion-exits-1-------executing-conversion-exits---@ITOC@@ABENCONVERSION_EXITS_2)
-   [Properties of Conversion Routines](#@@ITOC@@ABENCONVERSION_EXITS_3)

Properties of Conversion Exits   

A conversion exit has a five-character name CNVRT and can be used as follows:

-   As a semantic property of a [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").
-   As a property of a dynpro field defined in the [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry").
-   With the addition [USING EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)) of the WRITE statement.

A conversion exit is implemented in two function modules as [conversion routines](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry"), one for input and one for output, with the following naming conventions:

-   A function module called CONVERSION\_EXIT\_CNVRT\_INPUT performs the conversion from the display format to the ABAP representation, where CNVRT is the five-character name of the conversion exit.
-   A function module called CONVERSION\_EXIT\_CNVRT\_OUTPUT performs the conversion from the ABAP representation to the display format, where CNVRT is the five-character name of the conversion exit.

Executing Conversion Exits   

The conversion routines of a conversion exit are executed as follows:

-   If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is defined using a a reference to a domain with a conversion exit or if a conversion exit is assigned to the field directly in its properties, the INPUT conversion routine is executed automatically when the input in the associated screen field is passed to ABAP and the OUTPUT conversion routine is executed automatically when ABAP output is passed to the screen field. In each case, the converted content is used.
-   If an [ABAP data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") is declared with reference to a domain with a conversion exit, the OUTPUT conversion routine is executed by default when formatting the content using [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and the converted content is output or assigned. The default behavior can be overridden using the addition [USING *\[*NO*\]* EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)).

The function modules can of course be called and tested in the usual way.

Properties of Conversion Routines   

In addition to the naming conventions, the function modules implementing conversion exits must meet the following requirements:

-   Both function modules should be implemented in the same [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") and this group cannot contain further function modules.
-   Both function modules must have the following mandatory parameters:
    
    -   The input parameter INPUT for the value to be converted
    -   The output parameter OUTPUT for the converted value
    
    In the INPUT conversion, the parameter INPUT should be generic, and in the OUTPUT conversion, the parameter OUTPUT should generic because the type of the assigned dynpro field or ABAP field can change depending on how it is used.
    
-   An optional input parameter with the predefined name REFVAL can be created. When a dynpro field of the type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) or [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is converted, this parameter is automatically given the value of a an associated reference field of the type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) or [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)). If [WRITE USING EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)) is used, the input parameter REFVAL is not filled.
-   Other optional input parameters can also be used but are not filled automatically.
-   Statements that interrupt the program flow or terminate an [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry") cannot be executed in the function modules. In OUTPUT conversions, only [termination messages](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry") are valid. In INPUT conversions, [termination messages](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry"), [error messages](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry"), and (less useful) [status message](javascript:call_link\('abenstatus_message_glosry.htm'\) "Glossary Entry") can all be sent. Error messages result in an error dialog.
-   The effects of the conversion are described in the documentation.

Any exceptions raised in conversion routines always terminate the program. Conversion routines can only be debugged using the two-process debugger.

Hints

-   It is important that OUTPUT conversions have good performance, since an OUTPUT function module can be called very often in list output.
-   Conversion routines are subject to the [rule](javascript:call_link\('abenintern_extern_proc_call_guidl.htm'\) "Guideline") that no external subroutines should be called, since in this case their assignment to a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") cannot be identified.

Example

The function modules CONVERSION\_EXIT\_SDURA\_INPUT and CONVERSION\_EXIT\_SDURA\_OUTPUT are the conversion routines of the conversion exit SDURA. During output, this conversion exit transforms seconds to minutes and minutes to hours, and during input it transforms minutes to seconds and hours to minutes.