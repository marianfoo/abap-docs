  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-30.htm) → 

Assigning Formal Parameters in Release 3.0

Note: The following function can no longer be used with Release 4.6A.

If you are in the ABAP Editor and you choose Utilities → Type assignment, you call a conversion program which assigns types to the formal parameters of all [FORM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapform.htm) routines of an ABAP program and its includes.
Conversion is possible if all the actual parameters corresponding to a particular formal parameter agree in type and length, i.e. they are technically similar or all actual parameters have the same type (e.g. C).
If there are several [framework programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenframe_program_glosry.htm "Glossary Entry") for an include, this is displayed at the end of the list. However, the conversion proposals made refer only to the current framework program. The names of the FORM routines defined in this include appear in the list of conversion proposals underlined in red.
If there are external calls for a FORM routine, no conversion proposal is made. The names of any such routines are displayed at the end of the list.

If conversion is not possible, the reason is given at the end of the line. Possible reasons are:

Leng

Different lengths

Type

Different data types

Loca

Actual parameter(s) is/are locally defined variables

<..>

Field symbol

+(.)

Offset/length specification

Recu

Recursive call of FORM routine

Parm

Nesting: The actual parameter is the formal

parameter of a FORM routine where at least

one paramter is typed, but this actual/

formal parameter is not.

Expe

Nesting: The actual parameter is the formal

parameter of a FORM routine which is called

externally (or in other main programs of the

same include).

It is possible to specify that you want to see the subroutines in the source code. If you want to convert the FORM routine, you must select the checkbox and use the pushbutton "Convert Coding". After the conversion has been carried out, the checkbox for the converted FORM routine is no longer ready for input. The program contains the old FORM routine as a comment. The newly converted FORM routine is inserted before it.