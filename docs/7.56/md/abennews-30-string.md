  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

String Processing in Release 3.0

[1\. Assignments with Variable Offsets and Lengths Specified](#!ABAP_MODIFICATION_1@1@)
[2\. ASSIGN and PERFORM with Offsets Specified and Field Limits Not Exceeded](#!ABAP_MODIFICATION_2@2@)
[3\. New SHIFT Variants](#!ABAP_MODIFICATION_3@3@)
[4\. New Language Element CONCATENATE](#!ABAP_MODIFICATION_4@4@)
[5\. New Language Element SPLIT](#!ABAP_MODIFICATION_5@5@)
[6\. New Additions for WRITE *\[*TO*\]* for Alignment Purposes](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Assignments with Variable Offsets and Lengths Specified
[destination = source](javascript:call_link\('abapmove.htm'\)) can be used with respect to the source and target field when variable offsets and lengths are specified.

Modification 2   

ASSIGN and PERFORM with Offsets Specified and Field Limits Not Exceeded
The language elements [ASSIGN](javascript:call_link\('abapassign.htm'\)) and [PERFORM](javascript:call_link\('abapperform.htm'\)) can now be used to specify offsets without exceeding field limits (using field+off(\*)).

Modification 3   

New SHIFT Variants
The new variants of [SHIFT](javascript:call_link\('abapshift.htm'\)) allow field content to be shifted so that a prefix or suffix consisting of a certain number of characters is omitted. In the character string gaps, for example, it is possible to specify which characters constitute the prefix or suffix (using "SHIFT field LEFT DELETING LEADING gaps" or "SHIFT field RIGHT DELETING TRAILING gaps").

Modification 4   

New Language Element CONCATENATE
[CONCATENATE](javascript:call_link\('abapconcatenate.htm'\)) can be used to append character strings to a target field (using CONCATENATE f1 ... fn INTO g). The addition "SEPARATED BY h" makes it possible to insert the separator h between the character strings fi.

Modification 5   

New Language Element SPLIT
[SPLIT](javascript:call_link\('abapsplit.htm'\)) can be used to split a string in accordance with a sequence of separators (SPLIT f AT g) and place the resulting substrings in the specified fields (... INTO h1 ... hn) or in an internal table (... INTO TABLE itab).

Modification 6   

New Additions for WRITE *\[*TO*\]* for Alignment Purposes
WRITE now has the additions LEFT-JUSTIFIED, CENTERED, and RIGHT-JUSTIFIED for left-aligned, centered, or right-aligned output. These can be used both when displaying data in [lists](javascript:call_link\('abapwrite-.htm'\)) and for string processing using [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)). In the first case, the alignment refers to the output field in the list. In the latter case, it refers to the target field specified after TO.