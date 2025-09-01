  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_generic_program.htm) →  [Internal Statements for Source Code Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_internal.htm) → 

SCAN

This statement is for internal use only.
It must not be used in application programs.

Variants:

[1\. SCAN ABAP-SOURCE itab1 ...TOKENS INTO itab2](#!ABAP_VARIANT_1@1@)
                         ...STATEMENTS INTO itab3.
[2\. SCAN AND CHECK ABAP-SOURCE itab1 ...RESULT INTO itab2.](#!ABAP_VARIANT_2@2@)

Variant 1

SCAN ABAP-SOURCE itab1 ...TOKENS INTO itab2
                       ...STATEMENTS INTO itab3.
Parts marked with " ..." are interchangeable

Extras:

[1\. ... FROM n1](#!ABAP_ADDITION_1@1@)
[2\. ... TO   n2](#!ABAP_ADDITION_2@2@)
[3\. ... KEYWORDS   FROM itab](#!ABAP_ADDITION_3@3@)
[4\. ... LEVELS     INTO itab](#!ABAP_ADDITION_4@4@)
[5\. ... STRUCTURES INTO itab](#!ABAP_ADDITION_5@5@)
[6\. ... OVERFLOW INTO c1](#!ABAP_ADDITION_6@6@)
[7\. ... WITH ANALYSIS](#!ABAP_ADDITION_7@7@)
[8\. ... WITH DECLARATIONS](#!ABAP_ADDITION_8@8@)
[9\. ... WITH BLOCKS](#!ABAP_ADDITION_9@9@)
[10\. ... WITH COMMENTS](#!ABAP_ADDITION_10@10@)
[11\. ... WITH PRAGMAS pragmas](#!ABAP_ADDITION_11@11@)
[12\. ... WITH INCLUDES *\[*IMPLEMENTATIONS FROM itab*\]*](#!ABAP_ADDITION_12@12@)
[13\. ... WITH TYPE-POOLS](#!ABAP_ADDITION_13@13@)
[14\. ... WITH LIST TOKENIZATION](#!ABAP_ADDITION_14@14@)
[15\. ... PRESERVING IDENTIFIER ESCAPING](#!ABAP_ADDITION_15@15@)
[16\. ... WITHOUT TRMAC](#!ABAP_ADDITION_16@16@)
[17\. ... *\[*INCLUDE*\]* PROGRAM FROM c2](#!ABAP_ADDITION_17@17@)
[18\. ... INCLUDE INTO c3](#!ABAP_ADDITION_18@18@)
[19\. ... MESSAGE INTO c4](#!ABAP_ADDITION_19@19@)
[20\. ... WORD    INTO c5](#!ABAP_ADDITION_20@20@)
[21\. ... LINE    INTO n3](#!ABAP_ADDITION_21@21@)
[22\. ... OFFSET  INTO n4](#!ABAP_ADDITION_22@22@)
[23\. ... WITH EXPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*](#!ABAP_ADDITION_23@23@)
[24\. ... WITH IMPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*](#!ABAP_ADDITION_24@24@)
[25\. ... ENHANCEMENT OPTIONS INTO itab](#!ABAP_ADDITION_25@25@)
[26\. ... ENHANCEMENTS INTO itab](#!ABAP_ADDITION_26@26@)
[27\. ... WITH INACTIVE ENHANCEMENTS](#!ABAP_ADDITION_27@27@)
[28\. ... FRAME PROGRAM FROM c2](#!ABAP_ADDITION_28@28@)
[29\. ... REPLACING itab](#!ABAP_ADDITION_29@29@)

Effect

Breaks down the ABAP source code in the source code table itab1 into tokens according to the rules of the ABAP scanner. The tokens are written (one per row) to the token table itab2. The source code to be broken down need not necessarily be contained in an internal table. It can be specified in any character-like field. In particular, fields of the type STRING can be used. However, this variant only makes sense if the program to be broken down does not contain any comments. When an internal table is specified, itab1 must be a standard table.
The token table itab2 must be a standard table and have the structure STOKES. If the addition WITH ANALYSIS is specified, the token table must have the extended structure STOKESX.
(For reasons of downward compatibility, STOKEN and STOKEX can still be used. The main difference is that in the new structures the character string which makes up the token is typed with reference to the data type string. With the structures STOKEN and STOKEX, a C field of length 30 and an OVERFLOW area are used instead.)
Normally, comments are filtered out and subordinate source code units ([include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry"), called [macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry")) are ignored. These semantics can be modified by using the additions WITH COMMENTS and WITH ANALYSIS.
In addition to classifying the source code by token, the scanner organizes the tokens themselves into statements (using the colon-comma logic to form chained statements) and the statement table itab3 contains a statement description on each row. Here, a [three-part chained statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchained_statement_glosry.htm "Glossary Entry") "a: b, c1 c2, d." produces the three entries "a b,", "a c1 c2,", and "a d." in the statement table itab3.
The statement table itab3 must be a standard table without secondary keys and have the structure SSTMNT.
The statement classification characters colon, comma, and period are not written to the token table itab2. Instead, the table itab3 contains details about the position of a colon or the type (comma or period) and position of the end marker in the statement description.

System Fields

sy-subrc

Meaning

0

Source code table is not empty, contains no errors, and is broken down into tokens.

1

Source code table is not empty and is broken down into tokens, but at least one include program does not exist (can occur only in connection with the addition WITH INCLUDES).

2

Source code table itab1 is empty or a blank row range was selected (applies to the additions FROM and TO).

4

Scanner detects error in source code.

8

Other error or runtime error in scanner.

If a runtime error occurs in the scanner (sy-subrc has the value 8), a database rollback is executed as usual.

Components of the Structure STOKES

The fields of the structure STOKES, and thus the columns of the token table itab2, have the following meaning:

TYPE

Type of token with possible values:
I (identifier)
S (string, i.e. character literal)
L (list, enclosed in parentheses)
C (comment)
B (beginning of a list)
D (separator (divider) between list elements)
E (end of a list)
Types B, D, and E can only appear if the addition WITH
LIST TOKENIZATION is specified.

ROW

Number of row where token occurs or where it begins (>= 1)

COL

Offset of first character of token relative to start of row (>= 0)

STR

Character string forming the token.

If the structure STOKEN is specified, three more fields are filled and the following must be noted:

STR

The character string forming the token contains only the first part if the character string is longer than 30.

LEN

Length of the token

OVFL

Overflow flag for field STR with the following possible values:
SPACE (no overflow, token fits completely in field STR)
X (overflow, either not resolved (no overflow area specified) or token fits in overflow area c1))
O (overflow of token and overflow of overflow area c1)

OFF1

Offset in overflow area, if
token does not fit completely in field STR and
an overflow area c1 is specified and
token fits completely in overflow area c1.

Components of the Structure SSTMNT

The fields of the structure SSTMNT, and thus the columns of the statement table itab3, have the following meaning:

TYPE

Type of statement with possible values:
E ( [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") statement between [EXEC SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec.htm) and ENDEXEC or implementation of an [AMDP method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry") between [METHOD - BY DATABASE PROCEDURE, FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmethod_by_db_proc.htm) and ENDMETHOD)
I (INCLUDE prog)
J (INCLUDE prog, prog does not exist, can occur only in connection with the addition WITH INCLUDES)
T (TYPE-POOLS pool)
V (TYPE-POOLS pool, pool does not exist)
R (call a macro from table TRMAC)
D (call a macro internally defined with DEFINE)
M (macro definition between DEFINE and END-OF-DEFINITION)
C (COMPUTE statement, sometimes without COMPUTE as first token)
A (method call in short form)
K (other ABAP key word)
N (blank statement)
P (comment between statements)
S (comment within statements)
U (unknown, non-blank statement)

LEVEL

Index of source code unit in the level table itab specified after LEVELS INTO (>= 1, if level table specified, else 0).

STRUC

Index of the statement in the structure table itab specified after STRUCTURES INTO (0 if the structure table is not specified or the structure in which the statement occurs could not be constructed).

FROM

Index of first token of statement in the token table itab2 (FROM = TO + 1, if the statement consists only of the end marker (comma or period))

TO

Index of last token of statement in the token table itab2 (the end marker of the statement no longer counts as a token)

NUMBER

Statement counter in a source code unit. Covers all statements, regardless of how many are actually selected (in cases where a keyword table itab is specified after KEYWORDS FROM)

PREFIXLEN

Number of tokens before the colon (with chained statements >= 1, else 0)

COLONROW

Row number of colon (with chained statements >= 1, else 0)

COLONCOL

Column number of colon (with chained statements >= 0, else 0)

TERMINATOR

End marker of a statement (normally a period or a comma, but SPACE in the case of embedded Native SQL statements and internal macro definitions)

TROW

Row number of the end marker (>= 1, if TERMINATOR <> SPACE, else 0)

TCOL

Column position of the end marker (>= 0, if TERMINATOR <> SPACE, else 0)

ENHMT

Index in the enhancement table of type SENHMT, if the statement was enhanced or originates completely from an enhancement implementation. If addition ENHANCEMENTS INTO itab is not specified, this value is always 0.

Notes

1.  When macro calls are expanded, no positions can be specified. The corresponding fields in the token table itab2 and in the statement table itab3 are then set to 0.
    
2.  Unlike in the usual syntax check, the following are not handled as errors:
    

-   Comma without preceding colon (the comma then acts as an end marker),
    
-   Open chained statement sequence at the end of the source code, which means that the last statement is closed by a comma, not by a period,
    
-   Open statement at the end of the source code, which means that the last statement is not closed using a period or a comma.
    

1.  To enable errors to be analyzed without the program being modified, the additions INCLUDE, MESSAGE, WORD, LINE, and OFFSET must be specified to gather information about the error in question.
    

Addition 1

... FROM n1

Addition 2

... TO   n2

Effect

Breaks down the source code table itab1 into tokens not from start to finish, but only from row n1 to row n2.
The additions FROM n1 and TO n2 must, in this order, follow the specified source code table itab1.

Notes

1.  When using the specified start n1, the addition WITHOUT TRMAC must be used to ensure that there are no unnecessary database accesses to the table TRMAC.
    
2.  The specified end n2 is handled as "soft", meaning a statement that begins on a line <= n2, but ends only on a line > n2, is returned completely.
    If the specified end n2 splits a [chained statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenchained_statement_glosry.htm "Glossary Entry"), only the split part up to the next comma is returned completely, not the entire chained statement up to the next period.
    
3.  Negative specified lines are not allowed and produce a runtime error.
    
4.  A line specified as 0 is essentially the same as no specified line.
    
5.  If n1 > number of rows in source code table, the scanner is not called (sy-subrc = 2).
    
6.  If n1 > n2 and n2 > 0, the scanner is not called (sy-subrc = 2).
    

Addition 3

... KEYWORDS   FROM itab

Effect

Does not return all statements, only those specified in the keyword table itab.
If the keyword table is empty (hence it contains 0 rows), all the statements are selected.
The rows of the key word table are handled like a text field. It must be a standard table without secondary keys.
To select a [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") statement or a macro definition, the pseudo keywords EXEC\_SQL or DEFINE\_MACRO can be specified. It makes no difference whether the statements EXEC or DEFINE occur as well. Native SQL statements and macro definitions are returned as one statement (of type E or M even if the expansion of a macro definition results in more than one statement.
If the keyword table contains a blank row, blank statements are also selected.

Addition 4

... LEVELS     INTO itab

Effect

Stores details about each edited source code unit (source code table itab1 itself, expanded [include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry"), expanded macro definitions) in the level table itab.
Specify a level table only with the additions WITH INCLUDES or WITH IMPLICIT ENHANCEMENTS.
The level table itab must have the structure SLEVEL. It must be a standard table without secondary keys.

The fields of the structure SLEVEL (and consequently the columns of the level table itab) have the following meaning:

TYPE

Type of source code unit with possible values:
P (program)
D (internal DEFINE macro)
R (macro from table TRMAC)

NAME

Name of source code unit (name of include program, macro name)

DEPTH

Current nesting depth of source code unit (>= 1)

LEVEL

Index of superior (including or calling) source code unit in the level table (>= 1, if DEPTH >= 2, else 0)

STMNT

Index of superior (including or calling) statement in the statement table (>= 1, if DEPTH >= 2, else 0)

FROM

Index of first statement of source code unit in the statement table (>= 1)

TO

Index of last statement of source code unit in the statement table (>= 1)

If the source code unit contains include programs or macro calls, the row range \[FROM, TO\] in the statement table also covers the statements in subordinate source code units.

Note

Enhancements of type E are saved as normal includes in the level table.

Addition 5

... STRUCTURES INTO itab

Effect

Details of the construction of the source code table itab1 are written to the structure table itab.
The structure table itab must have the structure SSTRUC. It must be a standard table without secondary keys.

If the addition STRUCTURES INTO is used, it is essential that itab2 has the type STOKES or STOXESX. If not, tokens may be cut off and the structure analysis could fail.

The fields in SSTRUC (which are also the columns of structure table itab) have the following meanings:

TYPE

Type of structure with possible values:
P (beginning of the source code)
R (subroutine)
M (macro, EXEC SQL)
I (loop)
A (case distinction)
C (condition in a case distinction)
J (jump command)
D (structured declaration)
E (event)
S (sequence of statements with simple structures)

STMNT\_TYPE

The statement type of the beginning of the structure. The values are listed in the type pool SCAN in structure SCAN\_STRUC\_STMNT\_TYPE.

KEY\_START

Flags whether the start of the structure is described semantically ('X' if there is a special statement, else ' ').

KEY\_END

Flags whether the end of the structure is described semantically ('X' if there is a special statement, else ' ').

STMNT\_FROM

Index of the first statement of the structure in the statement table itab3.

STMNT\_TO

Index of the last statement of the structure in the statement table itab3.

STRUC\_FROM

Index of the first substructure of the structure in structure table itab.

STRUC\_TO

Index of the last substructure of the structure in structure table itab.

BACK

Index of the structure in the structure table itab that contains the structure as a substructure (0 if the structure is the root structure of a structure tree).

If the program that is executed for the statement has incorrect syntax, the behavior is undefined.

Addition 6

... OVERFLOW INTO c1

Effect

This addition is only allowed and required if the token table itab2 has the structure STOKEN or STOKEX.
If a token is too large to be stored in the token table in the field STR, it is placed in the overflow area c1. The offset of the token in the overflow area then lies in the token table in the field OFF1.

Addition 7

... WITH ANALYSIS

Effect

Breaks down each token t = a+b(c) according to the logic of the RSYN key word ANALYSIS into its three components a, b, and c.
Offset and length of components a, b and, c are stored in the fields LEN1, OFF2, LEN2, OFF3, and LEN3 in the token table. (The offset of OFF1 is always 0 and therefore not required.)
If the addition WITH ANALYSIS is specified, the token table itab2 must have the structure STOKESX, so that the fields LEN1, OFF2, LEN2, OFF3 and LEN3 are available.

If the token table has the structure STOKEX, the following must be noted:
If the whole token exists in the token table, the offsets specified are relative to the start of the token. If the token is in the overflow area c1, the offsets specified are relative to the start of the overflow area.

Addition 8

... WITH DECLARATIONS

Effect

Returns all declarative statements and all statements with [inline declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninline_declaration_glosry.htm "Glossary Entry").

Addition 9

... WITH BLOCKS

Effect

Returns all statements that define a processing block or a statement block.

Addition 10

... WITH COMMENTS

Effect

Also returns comments, with each individual comment representing a token. Also writes entries for each cohesive block to the table itab3. Here, a distinction is made between comments within statements and comments at program level. In itab3, an entry for a comment within a statement always comes before the statement containing the comment.

Example

Look at the following program fragment. The prefixed numbers are the indexes of the tokens.

1    \* An example
2    \* with scattered comments
6    MOVE
3    \* inserted comment 1
7    X
4    \* inserted comment 2
8    TO
9    Y
5    \* inserted comment 3
.

SCAN then enters the following values for the components TYPE, FROM and TO (in this order from left to right) into itab3.

'P'

1

2

'S'

3

5

'K'

6

9

Note

If the addition WITH COMMENTS is used, the table itab2 must have the row type STOKES or STOKESX.

Addition 11

... WITH PRAGMAS pragmas

Effect

This addition returns all relevant pragmas for each statement before the first correct token of the statement but after a block of comments collected using the addition WITH COMMENTS. pragmas expects a data object of the type c with length 1, usually containing the value "\*". Other values are intended for and recognized by special test tools.

A block of pragmas is combined in the statement table under the statement type "G". In this way, the block order is for a statement which contains comments and matching pragmas "S-G-K".

Pragmas which are not determined for ABAP Compiler are searched for in the TRPRAGMA database table.

Illegal (for example, unknown or lexically incorrect) pragmas are processed in the same way as legal pragmas, that is, they are summarized in a block preceding the actual statement (ID "G"). This corresponds to the behavior of the scanner in the compiler.

Addition 12

... WITH INCLUDES *\[*IMPLEMENTATIONS FROM itab*\]*

Effect

Also breaks down subordinate source code units (include programs, called macros) into tokens.

In addition, [source code plug-ins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") of explicit and implicit [enhancement options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_point_glosry.htm "Glossary Entry") which may exist are automatically inserted in the source code to be split. The optional addition IMPLEMENTATIONS FROM itab can be used to limit the number of inserted enhancements to the number specified in itab. If itab is empty, any enhancements are ignored. itab must be a standard table without secondary keys.

Notes

1.  The addition WITH INCLUDES is normally combined with the addition LEVELS INTO itab.
    
2.  If (at least) one include program does not exist, sy-subrc is set to 1 and the relevant INCLUDE statement is flagged in the statement table itab3 by the statement type J (instead of I), but the breakdown process continues. The level table itab contains no entry for [include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry") that do not exist.
    
3.  If WITH INCLUDES is combined with the addition WITHOUT TRMAC, TRMAC [macros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry") are not expanded because the system does not recognize them as subordinate source code units.
    
4.  When macro calls are expanded, no positions can be specified. The corresponding fields in the token table itab2 and in the statement table itab3 are then set to 0.
    
5.  The additions FRAME PROGRAM FROM and INCLUDE PROGRAM FROM are required to correctly resolve the source code enhancements.
    
6.  The addition INCLUDE PROGRAM FROM is required to resolve the include programs for methods of global classes.
    

Addition 13

... WITH TYPE-POOLS

Effect

This addition has the same effect as the WITH INCLUDES addition, except that with the former, include programs belonging to [type groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") are broken down into tokens.

Addition 14

... WITH LIST TOKENIZATION

Effect

Tokens of the form (a1, a2, a3) are not returned as tokens but broken down into the elementary components.

Addition 15

... PRESERVING IDENTIFIER ESCAPING

Effect

By default, exclamation marks before names (identifiers) are deleted. Exclamation marks can be used to distinguish between names and keywords. This addition prevents their deletion.

Addition 16

... WITHOUT TRMAC

Effect

If a statement does not start with an ABAP keyword or with a DEFINE macro, the system does not check whether this is a TRMAC macro, but assumes that the statement is unknown. (Unknown statements are flagged in the statement table itab3 with a U in the field TYPE.)
To avoid unnecessary database accesses to the table TRMAC, the addition WITHOUT TRMAC should be used whenever it is assumed that the source code being scanned contains unknown statements. Unknown statements are particularly likely to occur if the addition FROM n1 is used, because the scanner does not start at the beginning of the source code, but from a specified point.

Note

If WITHOUT TRMAC is used with WITH INCLUDES, TRMAC macros are not expanded because the system does not recognize them as subordinate source code units.

Addition 17

... *\[*INCLUDE*\]* PROGRAM FROM c2

Addition 18

... INCLUDE INTO c3

Addition 19

... MESSAGE INTO c4

Addition 20

... WORD    INTO c5

Addition 21

... LINE    INTO n3

Addition 22

... OFFSET  INTO n4

Effect

The above additions have the same effect as the corresponding additions in the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsyntax-check_for_itab.htm): c2 is an input field for a program name to be assigned to the source code, the fields c3, c4, c5, n3, and n4 are output fields, used when errors occur.

In Release 7.00, the addition PROGRAM FROM was renamed as INCLUDE PROGRAM FROM to clarify the difference between the master program and the split source code unit. If the addition is used in its previous form PROGRAM FROM, it sets the master program and the source code text unit to be scanned at the same time.
To be able to analyze error situations without modifying programs, it is vital that the additions INCLUDE INTO, MESSAGE INTO, WORD INTO, LINE INTO, and OFFSET INTO are specified. These additions provide information about the error in question.

Addition 23

... WITH EXPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*

Effect

When WITH EXPLICIT ENHANCEMENTS is specified, the existing [source code plug-ins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") for explicit [enhancement points](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_point_glosry.htm "Glossary Entry") are automatically inserted into the split source code.

The optional addition IMPLEMENTATIONS FROM can limit the number of inserted enhancements to the number specified in itab. If itab is empty, any enhancements are ignored.

Addition 24

... WITH IMPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*

Effect

When WITH IMPLICIT ENHANCEMENTS is specified, the existing [source code plug-ins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") for implicit [enhancement points](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_point_glosry.htm "Glossary Entry") are automatically inserted into the split source code.

The optional addition IMPLEMENTATIONS FROM can limit the number of inserted enhancements to the number specified in itab. If itab is empty, any enhancements are ignored.

Addition 25

... ENHANCEMENT OPTIONS INTO itab

Effect

Details about the enhancement points that exist in the source code unit that is being edited are stored in the description table itab. It therefore only makes sense to specify an enhancement table together with additions WITH INCLUDES, WITH EXPLICIT ENHANCEMENTS, or WITH IMPLICIT ENHANCEMENTS.

The level table itab must be a standard table without a secondary key and must have the row structure SEOPTN whose fields have the following meaning:

LEVEL

Index of the relevant entry in the level table. If this information is required, the addition LEVELS INTO must be specified at the same time to fill the level table.

ROW, COL

Position of the enhancement point in the source code. This position is not unique, since enhancements can be inserted to all blanks around the position specified by ROW and COLUMN.

FULL\_NAME

Full name of the enhancement point. This name uniquely identifies an implicit enhancement point.

TYPE

The type of enhancement point. I is for an implicit enhancement point and E is for an explicit enhancement point.

MODE

The mode of the enhancement point. Type S is for static, type D is for dynamic, and type A is for any enhancement point.

ENHMT

Index of the first relevant enhancement implementation in the enhancement table or 0 if the enhancement point is not implemented. If this information is required, the addition ENHANCEMENTS INTO must be specified at the same time to fill the enhancement table.

Notes

-   The additions FRAME PROGRAM FROM and INCLUDE PROGRAM FROM are used, especially for explicit enhancement points, to find out the name of the master program or the name of the current include program. These names are used to determine the full names of explicit enhancement points.
    
-   The addition ENHANCEMENT OPTIONS INTO is independent of the addition ENHANCEMENTS INTO and they can be used at the same time.
    

Addition 26

... ENHANCEMENTS INTO itab

Effect

Details of the enhancement implementations in the source code that is being edited are saved in the enhancement table itab. It therefore only makes sense to specify an enhancement table together with additions WITH INCLUDES, WITH EXPLICIT ENHANCEMENTS, or WITH IMPLICIT ENHANCEMENTS.

The enhancement table itab must be a standard table without secondary keys and have the row structure SENHMT, whose fields have the following meaning:

ENHMT

The index of the superior enhancement.

STMNT

The index of the statement in the statement table to which the enhancement is connected (such as ENHANCEMENT-POINT for explicit enhancements or METHOD for an implicit enhancement of a method implementation).

FROM

With regular enhancements (type "E"), this is the index of the first statement of the enhancement in the statement table. With fragmentary enhancements (type "F"), this is the index of the first token of the enhancement in the token table.

TO

With regular enhancements (type "E"), this is the index of the last statement of the enhancement in the statement table. With fragmentary enhancements (type "F"), this is the index of the first token of the enhancement in the token table.

NAME

Name of the enhancement.

INCLUDE

Name of the include that contains the implementation of the enhancement.

ID

Internal ID of the enhancement implementation within the implementation include.

TYPE

Type of the enhancement. Type "E" stands for a normal enhancement with one or more complete statements. Type "F" stands for a fragmentary enhancement of one or more tokens within an individual statement.

MODE

Mode of the enhancement: "D" (dynamic) or "S" (static).

Notes

-   For enhancements to be identified correctly, it is imperative that the additions FRAME PROGRAM FROM and INCLUDE PROGRAM FROM are specified correctly.
    
-   Multiple fragmentary enhancements can exist for a statement. In this case, the statement table refers to the entry in the first enhancement in the enhancement table; all other enhancements are connected directly to this and can be identified uniquely using the STMNT field.
    
-   The addition ENHANCEMENT INTO is independent of the addition ENHANCEMENTS OPTIONS INTO and they can be used at the same time.
    

Addition 27

... WITH INACTIVE ENHANCEMENTS

Effect

This addition is only possible with ENHANCEMENTS INTO. If WITH INACTIVE ENHANCEMENTS is specified as well, deactivated or overwritten enhancement implementations are respected. For these, the values "e" and "f" are stored instead of "E" and "F" in the TYPE column of the itab enhancement table.

Addition 28

... FRAME PROGRAM FROM c2

Effect

Using this addition, the master program is specified to the source code unit to be split. This is necessary, especially for inserting [source code plug-ins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") correctly.

Note

In the case of the master program, remember that even when this addition of the statement SCAN is specified, it is not edited at the same time. The statement SCAN always edits only the passed source code and possibly the included type groups or include programs. To edit an include program in its context, the master program must be passed itself. Here, any non-relevant include programs can be hidden using the addition REPLACING. As an alternative to the use of REPLACING, a mock master program, which constructs the correct context for include programs to be edited but remains empty the rest of the time, is also possible.

Addition 29

... REPLACING itab

Effect

Individual INCLUDE statements can be overridden by specifying an internal table of type SREPTAB. If itab contains an entry "INCL" in column name, the statement INCLUDE incl does not read the include INCL. Instead the source code from column itab-source is inserted.

It has the same effect as the addition REPLACING of the internal statement [SYNTAX-CHECK FOR PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsyntax-check_for_program.htm). However, the entry itab-trdir is ignored.

itab must be a standard table without secondary keys.

Variant 2

SCAN AND CHECK ABAP-SOURCE itab1 ...RESULT INTO itab2.

Parts marked with " ..." are interchangeable

Extras:

[1\. ... PROGRAM FROM c1](#!ABAP_ADDITION_1@30@)
2\. ... INCLUDE INTO c2
3\. ... MESSAGE INTO c3
4\. ... WORD    INTO c4
5\. ... LINE    INTO n1
6\. ... OFFSET  INTO n2

Effect

Checks the syntax of the program in table itab1. This check writes all information collected about the program, such as statement structures, statements, tokens, data objects, or types, to the variable result. Here, result must have the type SYSCH\_RESULT, defined in the [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") SYSCH.

Addition 1

... PROGRAM FROM c1

Addition 2

... INCLUDE INTO c2

Addition 3

... MESSAGE INTO c3

Addition 4

... WORD    INTO c4

Addition 5

... LINE    INTO n1

Addition 6

... OFFSET  INTO n2

Effect

The above additions have the same effect as the corresponding additions in the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsyntax-check_for_itab.htm): c1 is an input field for a program name to be assigned to the source code, the fields c2, c3, c4, n1, and n2 are output fields, used when errors occur.
To enable errors to be analyzed without the program being modified, the additions INCLUDE, MESSAGE, WORD, LINE, and OFFSET must be specified to gather information about the error in question.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE

-   Cause: A string was passed that is longer than 32767 characters, or a string table that contains a row with more than 32767 characters.
    Runtime error: SCAN\_SOURCE\_TOO\_WIDE