  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

REPLACE

[Quick Reference](javascript:call_link\('abapreplace_shortref.htm'\))

Syntax Forms

[Pattern-Based Replacement](javascript:call_link\('abapreplace_in_pattern.htm'\))
1\. REPLACE *\[**{*FIRST OCCURRENCE*}**|**{*ALL OCCURRENCES*}* OF*\]* [pattern](javascript:call_link\('abapreplace_pattern.htm'\))
          IN *\[*[section\_of](javascript:call_link\('abapfind_section_of.htm'\))*\]* dobj WITH new
          *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*
          *\[*[replace\_options](javascript:call_link\('abapreplace_options.htm'\))*\]*.
[Position-Based Replacement](javascript:call_link\('abapreplace_in_position.htm'\))
2\. REPLACE SECTION *\[*OFFSET off*\]* *\[*LENGTH len*\]* OF dobj WITH new
                  *\[*IN *{*CHARACTER*|*BYTE*}* MODE*\]*.

Effect

This statement replaces characters or bytes of the variable dobj with characters or bytes of the operand new. This operand is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"). Here, there is a difference between pattern-based and position-based replacements.

When the replacement is performed, an intermediate result without a length limit is created implicitly and passed to the data object dobj. If the length of the intermediate result is longer than the length of dobj, the object is truncated on the right in the case of data objects of fixed length. If the length of the intermediate result is shorter than the length of dobj, data objects of fixed length are padded on the right with blanks or hexadecimal zeros. Data objects of variable length are adjusted accordingly. If data is truncated on the right when the intermediate result is assigned, sy-subrc is set to 2.

When the character string is processed, the trailing blanks are respected for data objects dobj of fixed length. For new the closing blanks are ignored.

Example

The simplest form of the statement REPLACE.

DATA(str) = \`Hallo\`.
REPLACE \`a\` IN str WITH \`e\`.
cl\_demo\_output=>display( str ).

System Fields

sy-subrc

Meaning

0

The search pattern or specified section was replaced by the content of new and the result is available in full in dobj.

2

The search pattern or specified section was replaced by the content of new in dobj and the result of the replacement was truncated on the right.

4

The search pattern in pattern was not found in dobj in the pattern-based search.

Notes

-   The statement [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)) can be used to make replacements in internal tables.
    
-   These forms of the statement REPLACE replace the following obsolete form:
    [REPLACE substring WITH new INTO dobj ...](javascript:call_link\('abapreplace_obsolete.htm'\))
    
-   To replace parts of a character string in an operand position, a [replace function](javascript:call_link\('abenreplace_functions.htm'\)) can be used that includes some of the functions of the statement REPLACE.
    

Continue
[REPLACE pattern IN](javascript:call_link\('abapreplace_in_pattern.htm'\))
[REPLACE SECTION OF](javascript:call_link\('abapreplace_in_position.htm'\))