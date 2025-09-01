  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Character Strings in Release 6.10, ABENNEWS-610-STRINGS, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Character Strings in Release 6.10

The following new functions are available for character strings in Release 6.10:

[1\. Identify the Length and Number of a Character](#!ABAP_MODIFICATION_1@1@)
[2\. New Statements FIND and REPLACE](#!ABAP_MODIFICATION_2@2@)
[3\. Faster Access to Strings](#!ABAP_MODIFICATION_3@3@)
[4\. Support for Strings in the Database](#!ABAP_MODIFICATION_4@4@)
[5\. Definition of String Constants](#!ABAP_MODIFICATION_5@5@)
[6\. Introduction of Text String Literals](#!ABAP_MODIFICATION_6@6@)

Modification 1   

Identify the Length and Number of a Character

-   The function [charlen](javascript:call_link\('abapcompute_arith.htm'\)) provides the length of the first character of a string or of a character-like field.
-   [numofchar](javascript:call_link\('abapcompute_arith.htm'\)) can be used to obtain the number of characters in a string or a character-like field.
-   [dbmaxlen](javascript:call_link\('abapcompute_arith.htm'\)) provides the maximum length of the string as stored in ABAP Dictionary.

Modification 2   

New Statements FIND and REPLACE

There is a new statement, [FIND](javascript:call_link\('abapfind.htm'\)), for searching in character strings. This replaces the [SEARCH](javascript:call_link\('abapsearch-.htm'\)) statement. For replacing characters in character strings, the statement [REPLACE](javascript:call_link\('abapreplace_in_position.htm'\)) has been expanded to include position-based replacements.

Modification 3   

Faster Access to Strings

Offset/length access is now the fastest way to process a string character by character. This technique is also faster than searching in a field of type C that is assigned to a field symbol.

Modification 4   

Support for Strings in the Database

From Release 6.10, character strings and binary data can be stored in database columns of types STRING or RAWSTRING. The system distinguishes short strings from long strings:

-   Short strings consist of a maximum of 256 characters, do not have trailing blanks, and can be compared on the database.
-   Long strings can be of any length and do have trailing blanks; however they cannot be compared on the database.

When working with strings, some restrictions have to be observed. Further details are available [here](javascript:call_link\('abenddic_character_byte_types.htm'\)).

Modification 5   

Definition of String Constants

Strings can now also be defined as [constants](javascript:call_link\('abapconstants.htm'\)) and can be given an initial value using the keyword VALUE.

CONSTANTS str1 TYPE string VALUE 'ABC'.
DATA      str2 TYPE string VALUE 'XYZ'.
str2 = str1.
str1 = str2.              "Syntax error
WRITE: / str1, str2.

Modification 6   

Introduction of Text String Literals

[Text string literals](javascript:call_link\('abenliteral.htm'\)) are enclosed by backquotes in the form str = \`ABC\`. Text string literals are of data type STRING and trailing blanks are not ignored, unlike in text field literals.

Example

DATA: str1 TYPE string VALUE 'ABC  ',
      str2 TYPE string VALUE \`ABC  \`,
      cnt1 TYPE i,
      cnt2 TYPE i.
cnt1 = strlen( str1 ).
cnt2 = strlen( str2 ).
WRITE: / cnt1, cnt2.

The length for the string str1 is cnt1 = 3 and the length for the string str2 is cnt2 = 5.