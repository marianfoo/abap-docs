  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-610.htm) → 

Compiler in Release 6.10

[1\. Error Handling Using the SYNTAX-CHECK Statement](#!ABAP_MODIFICATION_1@1@)
[
2\. Static Checks in Offset/Length Declarations](#!ABAP_MODIFICATION_2@2@)
[
3\. Data Types for Source Texts with SCAN ABAP-SOURCE](#!ABAP_MODIFICATION_3@3@)
[
4\. Implementation in TOP Includes](#!ABAP_MODIFICATION_4@4@)
[
5\. Faster Generation of Program Segments](#!ABAP_MODIFICATION_5@5@)
[
6\. Generating Data und Types in System-Includes](#!ABAP_MODIFICATION_6@6@)
[
7\. Converting Character Literals with a Negative Maximum Value](#!ABAP_MODIFICATION_7@7@)
[
8\. Changing Write Protected Database Views](#!ABAP_MODIFICATION_8@8@)
[
9\. Typing the Source Texte with GENERATE SUBROUTINE POOL](#!ABAP_MODIFICATION_9@9@)

Modification 1

Error Handling Using the SYNTAX-CHECK Statement

The [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm) statement was enhanced such that the syntax check also continues after error messages occur, provided the parameter ID = ERR is set. Any error messages are written to a table, which can be declared using the TABLE addition. The error collection additionally provides the return value SY-SUBRC = 4.

Modification 2

Static Checks in Offset/Length Declarations

Previously, when you used offset/length declarations - that is, field+offset(length) -, the system did not check until runtime, whether offset and length values were convertible numbers of the types I, F, or P. This is now already checked during the syntax check.

Modification 3

Data Types for Source Texts with SCAN ABAP-SOURCE

The [SCAN ABAP-SOURCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapscan.htm) statement has been enhanced such that, you can now also use fields of type C or STRING for the source code that you want to scan, instead of an internal table. You no longer have to process an internal table.

Modification 4

Implementation in TOP Includes

If you use a FORM, FUNCTION, or CLASS ... IMPLEMENTATION statement, then this will now cause a syntax warning. However, you can still activate the program.

Modification 5

Faster Generation of Program Segments

Program segments can be generated much more quickly, now that pre-compiled headers have been introduced. Pre-compiled headers allow the system to import and reuse previously processed data declarations of global classes, interfaces, and type groups more quickly, both during the syntax check and when generating the program. Therefore it is no longer necessary to import program segments repeatedly. If the compiler does not find a pre-compiled header for the required program segment, then it generates one and stores it in the program buffer ([PXA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpxa_glosry.htm "Glossary Entry")).

You can also use the WITH PRECOMPILED HEADERS addition with the [GENERATE REPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_report.htm) statement to speed up generation from within an ABAP program.

Modification 6

Generating Data and Types in System Includes

Data and types in includes of the form <...> were previously seen as system objects and packed into a separate name space; however, this was ignored whne the program was generated. For this reason, such objects could be obscured by global program definitions, so that it was unclear at runtime which definition was used. Now both generation and runtime treat system objects in the same way. Therefore in future, the following example will always display the value 5.

include <SCREEN>.
data SCREEN type I value 5.
write / SCREEN.

Modification 7

Converting Text Literals with a Negative Maximum Value

Previously, if you tried to assign the highest negative integer value to a type I variable, in the form of the text literal '-2147483648', the system raised an exception that can be handled, CX\_SY\_CONVERSION\_OVERFLOW. On the other hand, an assignment in the form of a numeric literal was accepted. Now both forms are supported, as the following example shows:

PROGRAM test\_int.
DATA int TYPE i.
int = '-2147483648'.
int =  -2147483648.
WRITE int.

Modification 8

Changing Write-Protected Database Views

In the maintenance status of the dictionary it is possible to set a database view to read only, so that ABAP programs cannot make any changes. Previously the maintenance status was only checked at runtime. Now a syntax error is triggered when this situation is already statically recognized.

Modification 9

Typing the Source Text with GENERATE SUBROUTINE POOL

With the [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_report.htm) the transfer of the source code is now also possible in an internal table of row type STRING.