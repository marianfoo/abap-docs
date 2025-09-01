  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Conversion Routines, ABENCONVERSION_EXITS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Conversion Routines

A conversion routine (also referred to as a conversion exit) uses a self-written implementation to override standard conversions that take place when values are passed from an ABAP data object to a dynpro field or from a dynpro field to an ABAP data object and in the formatting of data using the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) and [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)).

-   [Properties of Conversion Routines](#@@ITOC@@ABENCONVERSION_EXITS_1)
-   [Executing Conversion Routines](#@@ITOC@@ABENCONVERSION_EXITS_2)
-   [Function Modules for Conversion Routines](#@@ITOC@@ABENCONVERSION_EXITS_3)

Properties of Conversion Routines   

A conversion routine has a five-character name CNVRT, used to

-   Enter the routine as a semantic property of a [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") in the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry").
-   Assign the routine directly to a dynpro field in the [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry").
-   Specify the routine using the addition [USING EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)) of the WRITE statement.

From a technical perspective, a conversion routine consists of two [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry"). The function modules are associated with the conversion routine using a naming convention:

-   A function module called CONVERSION\_EXIT\_CNVRT\_INPUT performs the conversion from the display format to the ABAP representation, if CNVRT is the five-character name of the conversion routine.
-   A function module called CONVERSION\_EXIT\_CNVRT\_OUTPUT performs the conversion from the ABAP representation to the display format, if CNVRT is the five-character name of the conversion routine.

Executing Conversion Routines   

Conversion routines are executed as follows:

-   If a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is defined using a reference to a domain with a conversion routine or if a conversion routine is assigned to the field directly in its properties, the INPUT function module is executed automatically when the input in the associated screen field is passed to ABAP and the OUTPUT function module is executed automatically when ABAP output is passed to the screen field. In each case, the converted content is used.
-   If an [ABAP data object](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") is declared with reference to a domain with a conversion routine, the OUTPUT function module is executed by default when formatting the content using [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and the converted content is output or assigned. The default behavior can be overridden using the addition [USING *\[*NO*\]* EDIT MASK](javascript:call_link\('abapwrite_to_options.htm'\)).

The function modules can of course be called and tested in the usual way.

Function Modules for Conversion Routines   

In addition to the naming conventions, the function modules must meet the following requirements:

-   Both function modules should be implemented in the same [function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") and this group cannot contain further function modules.
-   Both functions must have the following mandatory parameters:
    
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
-   Conversion routines are subject to the [rule](javascript:call_link\('abenintern_extern_proc_call_guidl.htm'\) "Guideline") that no external subroutines can be called, since in this case their assignment to a [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry") cannot be identified.

Example

The function modules CONVERSION\_EXIT\_SDURA\_INPUT and CONVERSION\_EXIT\_SDURA\_OUTPUT of the conversion routine SDURA. In its output, this conversion routine transforms seconds to minutes or minutes to hours, and in its input minutes to seconds or hours to minutes.