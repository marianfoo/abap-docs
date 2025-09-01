---
title: "Conversion Routines"
description: |
  A conversion routine (also referred to as a conversion exit) uses a self-written implementation to override standard conversions that take place when values are passed from an ABAP data object to a dynpro field or from a dynpro field to an ABAP data object and in the formatting of data using the sta
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_exits.htm"
abapFile: "abenconversion_exits.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenconversion", "exits"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) → 

Conversion Routines

A conversion routine (also referred to as a conversion exit) uses a self-written implementation to override standard conversions that take place when values are passed from an ABAP data object to a dynpro field or from a dynpro field to an ABAP data object and in the formatting of data using the statements [WRITE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) and [WRITE TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to.htm).

-   [Properties of Conversion Routines](#abenconversion-exits-1-------executing-conversion-routines---@ITOC@@ABENCONVERSION_EXITS_2)
-   [Function Modules for Conversion Routines](#@@ITOC@@ABENCONVERSION_EXITS_3)

Properties of Conversion Routines

A conversion routine has a five-character name CNVRT, used to

-   Enter the routine as a semantic attribute of a [DDIC domain](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendomain_glosry.htm "Glossary Entry") in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry").
-   Assign the routine directly to a dynpro field in the [Screen Painter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_painter_glosry.htm "Glossary Entry").
-   Specify the routine using the addition [USING EDIT MASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to_options.htm) of the WRITE statement.

From a technical perspective, a conversion routine consists of two [function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_module_glosry.htm "Glossary Entry"). The function modules are associated with the conversion routine using a naming convention:

-   A function module called CONVERSION\_EXIT\_CNVRT\_INPUT performs the conversion from the display format to the ABAP representation, if CNVRT is the five-character name of the conversion routine.
-   A function module called CONVERSION\_EXIT\_CNVRT\_OUTPUT performs the conversion from the ABAP representation to the display format, if CNVRT is the five-character name of the conversion routine.

Executing Conversion Routines

Conversion routines are executed as follows:

-   If a [dynpro field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_field_glosry.htm "Glossary Entry") is defined using a reference to a domain with a conversion routine or if a conversion routine is assigned to the field directly in its attributes, the INPUT function module is executed automatically when the input in the associated screen field is passed to ABAP and the OUTPUT function module is executed automatically when ABAP output is passed to the screen field. In each case, the converted content is used.
-   If an [ABAP data object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_object_glosry.htm "Glossary Entry") is declared with reference to a domain with a conversion routine, the OUTPUT function module is executed by default when formatting the content using [WRITE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to.htm) and the converted content is output or assigned. The default behavior can be overridden using the addition [USING *\[*NO*\]* EDIT MASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to_options.htm).

The function modules can of course be called and tested in the usual way.

Function Modules for Conversion Routines

In addition to the naming conventions, the function modules must meet the following requirements:

-   Both function modules should be implemented in the same [function pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_pool_glosry.htm "Glossary Entry") and this group cannot contain further function modules.
-   Both functions must have the following mandatory parameters:
    
    -   The input parameter INPUT for the value to be converted
    -   The output parameter OUTPUT for the converted value
    
    In the INPUT conversion, the parameter INPUT should be generic, and in the OUTPUT conversion, the parameter OUTPUT should generic because the type of the assigned dynpro field or ABAP field can change depending on how it is used.
    
-   An optional input parameter with the predefined name REFVAL can be created. When a dynpro field of the type [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) or [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) is converted, this parameter is automatically given the value of a an associated reference field of the type [CUKY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) or [UNIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm). If [WRITE USING EDIT MASK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwrite_to_options.htm) is used, the input parameter REFVAL is not filled.
-   Other optional input parameters can also be used but are not filled automatically.
-   Statements that interrupt the program flow or terminate an [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry") cannot be executed in the function modules. In OUTPUT conversions, only [termination messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentermination_message_glosry.htm "Glossary Entry") are valid. In INPUT conversions, [termination messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentermination_message_glosry.htm "Glossary Entry"), [error messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenerror_message_glosry.htm "Glossary Entry"), and (less useful) [status message](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatus_message_glosry.htm "Glossary Entry") can all be sent. Error messages result in an error dialog.
-   The effects of the conversion are described in the documentation.

Any exceptions raised in conversion routines always terminate the program. Conversion routines can only be debugged using the two-process debugger.

Hints

-   It is important that OUTPUT conversions have good performance, since an OUTPUT function module can be called very often in list output.
-   Conversion routines are subject to the [rule](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenintern_extern_proc_call_guidl.htm "Guideline") that no external subroutines can be called, since in this case their assignment to a [program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_group_glosry.htm "Glossary Entry") cannot be identified.

Example

The function modules CONVERSION\_EXIT\_SDURA\_INPUT and CONVERSION\_EXIT\_SDURA\_OUTPUT of the conversion routine SDURA. In its output, this conversion routine transforms seconds to minutes or minutes to hours, and in its input minutes to seconds or hours to minutes.