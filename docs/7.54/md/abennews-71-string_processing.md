  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-71.htm) → 

Character String and Byte String Processing in Release 7.0, EhP2

[1\. String expressions](#!ABAP_MODIFICATION_1@1@)

[2\. String templates](#!ABAP_MODIFICATION_2@2@)

[3\. Chaining operator](#!ABAP_MODIFICATION_3@3@)

[4\. String functions](#!ABAP_MODIFICATION_4@4@)

[5\. Bit functions](#!ABAP_MODIFICATION_5@5@)

[6\. Management of short strings](#!ABAP_MODIFICATION_6@6@)

[7\. Streaming for strings](#!ABAP_MODIFICATION_7@7@)

[8\. Any start values for data objects of type xstring](#!ABAP_MODIFICATION_8@8@)

[9\. Maximum length of data objects of types c, n, and x](#!ABAP_MODIFICATION_9@9@)

Note

The program DEMO\_EXPRESSIONS provides examples of character string and byte string processing for Release 7.0, EhP2.

Modification 1

String Expressions

The new [string expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm) enhance the previous [calculation expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_expression_glosry.htm "Glossary Entry") and enable character string processing at specific [operand positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexpression_positions.htm). A string expression is either a [string template](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) or a [chaining](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm) with operator &&.

Modification 2

String Templates

[String templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) have been introduced as a new way of creating character strings. A string template is enclosed between two "|" characters and creates a character string in a string expression from a

-   literal text,
    
-   embedded expressions, and
    
-   control characters.
    

String templates replace the [WRITE TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to.htm) statement to a large extent.

Modification 3

Chaining Operator

The chaining operator [&&](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_operators.htm) is a new string operator that chains together two character-like operands as one operand in a string expression. The chaining operator replaces the [CONCATENATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconcatenate.htm) statement to a large extent.

Modification 4

String Functions

[String functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) have been introduced as a new type of [embedded function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry"). There are

-   [Search functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_functions.htm)
    
-   a [similarity function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendistance_functions.htm)
    
-   [Processing functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocess_functions.htm)
    

The [Boolean function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenboole_functions.htm) boolc can also be considered a string function.

The string functions enable many character string processing tasks to be performed in operand positions where separate statements and helper variables were required previously.

Modification 5

Bit Functions

[Bit functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_functions.htm) have been introduced as a new type of [embedded function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpredefined_function_glosry.htm "Glossary Entry"). A bit function (bit-set) currently exists for setting bits. The [Boolean function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenboole_functions.htm) boolx can also be considered a bit function.

Modification 6

Management of Short Strings

The internal management of short stings has been optimized to reduce the memory overhead that accumulates when short strings are managed for the relevant [string header](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption_1.htm). For string lengths of less than 30 characters or 60 bytes, the string header now only requires between 10 and 40 bytes. For longer strings, this remains at approximately 50 bytes. Before Release 7.0, EhP2, the overhead of the string header was not related to the length of the string and was approximately 60 bytes for each string.

Strings are recommended instead of data objects for all character string and byte string operations where a fixed length is not important.

Note

This change is also available before EhP2 if a kernel greater than Release 7.0 is used.

Modification 7

Streaming for Strings

The new [streaming](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstreaming_glosry.htm "Glossary Entry") concept supports [strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_streams.htm).

Modification 8

Any Start Values for Data Objects of Type xstring

From Release 7.0, EhP2, any suitable start value val can be specified for xstring after the addition [VALUE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_options.htm) for statements DATA, CONSTANTS and so on. Previously, only IS INITIAL was possible.

Modification 9

Maximum Length of Data Objects of Types c, n, and x

The maximum length of data objects of types [c](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) and [n](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) has been increased from 65535 to 262143. The maximum length of data objects of type [x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) has been increased from 65535 to 524287.