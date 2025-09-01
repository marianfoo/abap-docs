  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-610.htm) → 

Compiler in Release 6.10

[1\. Error handling using the statement SYNTAX-CHECK](#!ABAP_MODIFICATION_1@1@)
[2\. Static checks in specified offsets/lengths](#!ABAP_MODIFICATION_2@2@)
[3\. Data types for source code in SCAN ABAP-SOURCE](#!ABAP_MODIFICATION_3@3@)
[4\. Implementation in TOP includes](#!ABAP_MODIFICATION_4@4@)
[5\. Faster generation of program segments](#!ABAP_MODIFICATION_5@5@)
[6\. Generating data and types in system includes](#!ABAP_MODIFICATION_6@6@)
[7\. Converting C literals with a negative maximum value](#!ABAP_MODIFICATION_7@7@)
[8\. Changing read-only DDIC database views](#!ABAP_MODIFICATION_8@8@)
[9\. Typing the source code in GENERATE SUBROUTINE POOL](#!ABAP_MODIFICATION_9@9@)

Modification 1

Error Handling Using the Statement SYNTAX-CHECK

The statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_for_itab.htm) has been enhanced so that the syntax check also continues after error messages occur, as long as the parameter ID = ERR is set. Any error messages are written to an internal table, which can be specified using TABLE. The collected errors also provide the return code sy-subrc = 4.

Modification 2

Static Checks in Specified Offsets/Lengths

Previously, in offsets/lengths specified as field+offset(length) the values were not checked for convertibility to numbers of the types I, F, or P until runtime. This is now checked as part of the syntax check.

Modification 3

Data Types for Source Code in SCAN ABAP-SOURCE

The statement [SCAN ABAP-SOURCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapscan.htm) has been enhanced so that fields of type C or string are permitted in the scanned source code, instead of an internal table. This means that an internal table no longer needs to be edited.

Modification 4

Implementation in TOP Includes

If implementations of the type FORM, FUNCTION, or CLASS ... IMPLEMENTATION are made in a top include, a syntax warning is now produced. The program can still be activated however.

Modification 5

Faster Generation of Program Segments

Program segments can be generated much more quickly, now that pre-compiled headers have been introduced. Pre-compiled headers allow the system to import and reuse previously processed data declarations of global classes, interfaces, and type pools more quickly, both during the syntax check and when generating the program. This means it is no longer necessary to import program segments repeatedly. If the compiler does not find a pre-compiled header for the required program segment, it generates one and stores it in the program buffer ([PXA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpxa_glosry.htm "Glossary Entry")).

The addition WITH PRECOMPILED HEADERS of the statement [GENERATE REPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgenerate_report.htm) can now be used to speed up generation from within an ABAP program.

Modification 6

Generating Data and Types in System Includes

Data and types in includes of the form <...> were previously viewed as system objects and packed into a separate name space; however, this was ignored when the program was generated. For this reason, objects of this type could be obscured by global program definitions, so that it was unclear at runtime which definition was used. Now both generation and runtime handle system objects in the same way. Therefore in future, the following example will always produce the value 5.

include <SCREEN>.
data SCREEN type I value 5.
write / SCREEN.

Modification 7

Converting C Literals with a Negative Maximum Value

Previously, if an attempt was made to assign the highest negative integer value to a type I variable, in the form of the C literal '-2147483648', the system raised a catchable exception, CX\_SY\_CONVERSION\_OVERFLOW. On the other hand, an assignment in the form of a numeric literal was accepted. Now both forms are supported, as the following example shows:

DATA int TYPE i.
int = '-2147483648'.
int =  -2147483648.
WRITE int.

Modification 8

Changing Read-Only DDIC database views

In the editing status of the dictionary, it is possible to set a DDIC database view to read only, so that ABAP programs cannot make any changes. Previously the editing status was only checked at runtime. Now a syntax error is produced when this situation is detected statically.

Modification 9

Typing the Source Code in GENERATE SUBROUTINE POOL

In the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgenerate_report.htm), source code can now also be passed in an internal table of line type string.