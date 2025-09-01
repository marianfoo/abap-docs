# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Structure and Style / Formatting the Source Code

Included pages: 5


### abenformatting_code_gdl.htm

---
title: "Formatting the Source Code"
description: |
  The readability of source code is dependent to a great extent on formatting that highlights its logical structure. The following methods help to format source code in a clear way. -   Case(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlower_upper_case_guidl.htm 'Guideline') -   S
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformatting_code_gdl.htm"
abapFile: "abenformatting_code_gdl.htm"
keywords: ["do", "case", "method", "abenformatting", "code", "gdl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) → 

Formatting the Source Code

The readability of source code is dependent to a great extent on formatting that highlights its logical structure. The following methods help to format source code in a clear way.

-   [Case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlower_upper_case_guidl.htm "Guideline")
-   [Statements per Program Line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_guidl.htm "Guideline")
-   [Using Pretty Printer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_pretty_printer_guidl.htm "Guideline")
-   [Line Width](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenline_width_guidl.htm "Guideline")

Continue
[Case](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlower_upper_case_guidl.htm)
[Statements per Program Line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_guidl.htm)
[Using Pretty Printer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_pretty_printer_guidl.htm)
[Line Width](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenline_width_guidl.htm)


### abenlower_upper_case_guidl.htm

---
title: "Case"
description: |
  Background In contrast to many other modern programming languages, ABAP is not case-sensitive for ABAP words (tokens of an ABAP statement that express its semantics; either ABAP keywords or additions) nor for operators and names of operands. The only exception is dynamic programming(https://help.s
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlower_upper_case_guidl.htm"
abapFile: "abenlower_upper_case_guidl.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenlower", "upper", "guidl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformatting_code_gdl.htm) → 

Case

Background

In contrast to many other modern programming languages, ABAP is not case-sensitive for ABAP words (tokens of an ABAP statement that express its semantics; either ABAP keywords or additions) nor for operators and names of operands. The only exception is [dynamic programming](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenref_types_objects_guidl.htm "Guideline"), where the names of operands usually have to be specified in uppercase.

Rule

Do not mix uppercase and lowercase in names

Use only lowercase or uppercase in an individual token. Use uppercase for keywords and lowercase for operands.

Details

The usage of uppercase or lowercase for tokens, that is ABAP words and names, used to be a very important aspect for the formatting of the source code. Uniform case-sensitivity made it easier for the reader to distinguish keywords from names. Due to the source code coloring in the syntax in ABAP Editor, this aspect has become less important; however, the above rule is still valid because of the following reasons:

-   Source code coloring in the syntax is generally not visible when source code is printed. Therefore, uniform case-sensitivity is useful here for emphasizing the difference between keywords and names.
-   Since case-sensitivity in ABAP source code is not significant in the syntax outside of character literals (that is, text field literals in single quotes ('), string literals in backquotes (\`), and string templates in vertical bars (|)), the [ABAP development environment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dev_envir_glosry.htm "Glossary Entry") is not designed to maintain it permanently outside the mentioned constructs. Pretty Printer only offers the alternatives to use only lowercase or only uppercase, or to use either uppercase or lowercase for keywords and lowercase or uppercase respectively for names in operand positions.

Because of the second point, it does not make sense in ABAP to use uppercase and lowercase as a self-defined means of style. In other words, the names should not be written in mixed case style (also referred to as camel case style; see the following example), as is very popular in languages that are case-sensitive. A consistent notation cannot be ensured due to the missing relevance in the syntax. A mixed notation will be lost sooner or later when Pretty Printer is used, even if this is unintentional. Moreover, it possibly prevents other developers from using Pretty Printer after changes have been made to the source code. Use of [Pretty Printer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_pretty_printer_guidl.htm "Guideline") is explicitly recommended.

Hint

The built-in string functions, to\_mixed and from\_mixed, allow conversions between names in ABAP style with underscores and names in mixed case style or camel case style, which can be helpful for data exchange with external systems.

Example

When the program PGL\_UPPER\_LOWER\_CASE is executed, source code is displayed in ABAP Editor; the upper part shows the declaration of a class with names in mixed case style or camel case style. Here, uppercase marks the beginnings of words within a combined name.

The code provided here as a bad example approximately follows the Java convention, and in the eyes of many beholders it might look better than the following good example. However, its appearance is less important than the technical restrictions mentioned, which do not currently allow naming like this. Executing Pretty Printer would irreversibly spoil the code's appearance because the names would then be illegible.

The lower part of the source code shows the declaration of a class in ABAP style, where which words within combined names are separated by underscores (\_). These separations cannot get lost when Pretty Printer is used.

Once the program has been called, the example is formatted according to the proposed Pretty Printer [setting](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_pretty_printer_guidl.htm "Guideline"), with ABAP words in uppercase and operands in lowercase. Regardless of its configuration, the separation of the words in the names would be preserved after each execution of Pretty Printer.


### abenstatement_guidl.htm

---
title: "Statements per Program Line"
description: |
  Background An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines. Rule Maximum of one statement per program line Write a maximum of one statement in every source
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_guidl.htm"
abapFile: "abenstatement_guidl.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "abenstatement", "guidl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformatting_code_gdl.htm) → 

Statements per Program Line

Background

An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines.

Rule

Maximum of one statement per program line

Write a maximum of one statement in every source code line. Long statements can and should be split at suitable places. This means the statements can be divided up across consecutive lines.

Details

Using multiple statements in one line makes the source code harder to read. If a line contains an entire control structure, the lack of indentations makes it especially difficult to identify the logical structure. Therefore you should try to avoid using more than one statement in a program line.

Besides reduced readability, using multiple statements in one line can also make the code more difficult to debug. Even in single steps, ABAP Debugger stops a maximum of once per executable program line. This makes it impractical for the debugging process if there is more than one statement in a line.

If a statement spans [multiple lines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenline_width_guidl.htm "Guideline") (which occurs frequently due to the potential length of complex ABAP statements), there should be no empty lines between the parts of the statement. The breaks in the statement should occur at semantically suitable places so that groups with a similar semantic meaning are next to each other, if possible. Indentations should be used to ensure that the statement is as well structured and readable as possible.

Bad Example

The following source code shows a program section with correct syntax but that is poorly laid out and difficult to understand. Even the [Pretty Printer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_pretty_printer_guidl.htm "Guideline") can barely improve the layout of the pattern shown here.

CLASS class DEFINITION.
  PUBLIC SECTION. METHODS meth. ENDCLASS.

CLASS class IMPLEMENTATION. METHOD meth.
  DATA: itab TYPE TABLE OF dbtab, wa TYPE dbtab.
  SELECT \* FROM dbtab WHERE column = ' ' INTO TABLE @itab.
  IF sy-subrc <> 0. RETURN. ENDIF.
  LOOP AT itab INTO wa. ... ENDLOOP.
  ENDMETHOD. ENDCLASS.

Good Example

The following source code shows the same code as above but with the recommended limit of one statement per line. The complex SELECT statement contains numerous clauses and hence spans multiple consecutive lines.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD meth.
    DATA: itab TYPE TABLE OF dbtab,
          wa   TYPE dbtab.
    SELECT \*
           FROM dbtab
           WHERE column = ' '
           INTO TABLE @itab.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    LOOP AT itab INTO wa.
       ...
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.


### abenuse_pretty_printer_guidl.htm

---
title: "Using Pretty Printer"
description: |
  Background The alignment of ABAP statements in the source code is not defined in the syntax. There should be a maximum of one statement per line(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_guidl.htm 'Guideline'), which can be technically indented and wrapped as require
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuse_pretty_printer_guidl.htm"
abapFile: "abenuse_pretty_printer_guidl.htm"
keywords: ["select", "insert", "loop", "do", "if", "case", "method", "class", "data", "abenuse", "pretty", "printer", "guidl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformatting_code_gdl.htm) → 

Using Pretty Printer

Background

The alignment of ABAP statements in the source code is not defined in the syntax. There should be a [maximum of one statement per line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_guidl.htm "Guideline"), which can be technically indented and wrapped as required. This makes control structures visible. By inserting blank lines, related source code sections can be grouped, which makes the code easier to read. Note that, in ABAP statements, blanks cannot be added or left out at random. For example, tokens must be separated by at least one blank (especially with operands and operators). In a method call, no blanks are allowed between the name of the method and the opening parenthesis.

Languages with a C-like syntax (where statement blocks within control structures are delimited by curly brackets) provide an inexhaustible source for discussions on how to best make indentations. However, for ABAP the solution is obvious: Every initiating statement (such as IF) has an associated concluding statement (in this case, ENDIF). Event blocks for ABAP runtime framework events are the only exception here. They are introduced by a statement (such as START-OF-SELECTION) but are not concluded with the associated concluding statement. Instead, they are concluded with the next event block. However, [event blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") should only be used in exceptional cases. Initiating and concluding statements are aligned at the same level; the block content is indented.

Pretty Printer can modify the indentation of control structures and the capitalization of keywords and names in the source code at any time (even in display mode).

Rule

Use Pretty Printer consistently and universally

Use Pretty Printer to format source code consistently. If Pretty Printer cannot format the code as required, manual changes are necessary.

Details

We recommend that the use of Pretty Printer to make indentations required to make the source code easy to read. This guarantees that the indentations are consistently based on the logical control structure and that the indentation depth is identical for each program. Implementing this type of formatting by hand is prone to errors and not recommended.

Even though Pretty Printer can be used to adapt the source code to any other style (using the available settings), a consistent and universal style should be selected. The reason for this is that version management and the correction workbench are not designed to ignore purely stylistic differences between source code versions. Therefore, the following Pretty Printer settings are recommended for consistent source code formatting. These settings cover the expectations and working habits of most ABAP developers:

-   Indent statements
    
    Absolutely essential for a logical program structure that is clearly visible. A [maximum of one statement per program line](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_guidl.htm "Guideline") is allowed.
    
-   Do not insert standard comments
    
    The standard comment only contains redundant information and it is not adapted, if the source code is changed.
    
-   Uppercase keywords
    
    Makes it easier to [understand the source code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlower_upper_case_guidl.htm "Guideline") in printed form. In this case, syntax color-coding is usually not visible.
    

The code needs to be edited manually, to ensure the correct use of blank lines between related source code blocks. Syntax units, such as classes, methods, control blocks, or semantic units of a program, should be separated from one another with one or two blank lines (depending on their size and meaning). However, there should not be more than two blank lines in succession.

Note

We recommend that the use of the Keyword Lowercase setting in Pretty Printer, for reasons of visual clarity. This is because repository object names and data objects names in the ABAP Debugger are displayed in uppercase, in all tools required for ABAP development. With the Keyword Lowercase setting, the source code format matches this display format. For example, reading COLUMN columns form a DBTAB database table:

select COLUMN1 COLUMN2 ...
       from DBTAB
       into corresponding fields of ITAB
       where COLUMN = FIELD.

Names in uppercase are also more suitable because many dynamic operand positions in ABAP still require uppercase. A good example is an almost static call of function modules. Using the Keyword Lowercase setting, the call of a function module FUNCTION\_MODULE would be as follows:

call function 'FUNCTION\_MODULE' exporting PARAMETER = FIELD.

However, the Keyword Lowercase setting was added to Pretty Printer relatively late and could not compete against the more common setting Keyword Uppercase. In addition, the ABAP syntax diagrams and sample programs in ABAP documentation, as well as all relevant publications, are formatted with the Keyword Uppercase setting. If we recommended the use of the Keyword Lowercase setting, this would lead to confusion and would not help the programming guidelines to be universally accepted.

Bad Example

The following source code shows the above example, but without indentations and only with lowercase. The highlighted ABAP words (shown in bold here and in color in the ABAP Editor) might not appear in a program printout. This would make the program even less legible.

class class definition.
public section.
methods meth.
endclass.
class class implementation.
method meth.
data: itab type table of dbtab,
wa type dbtab.
select \*
from dbtab
into table itab
where column = ' '.
if sy-subrc <> 0.
return.
endif.
loop at itab into wa.
...
endloop.
endmethod.
endclass.


### abenline_width_guidl.htm

---
title: "Line Width"
description: |
  Background The maximum line width of an ABAP program is restricted to 255 characters. Rule Do not use full line width Limit the width of a line in the source code to a reasonable size. As a rule of thumb, you should be able to print a program on common paper formats without truncation or line breaks
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenline_width_guidl.htm"
abapFile: "abenline_width_guidl.htm"
keywords: ["do", "method", "abenline", "width", "guidl"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_style_gdl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenformatting_code_gdl.htm) → 

Line Width

Background

The maximum line width of an ABAP program is restricted to 255 characters.

Rule

Do not use full line width

Limit the width of a line in the source code to a reasonable size. As a rule of thumb, you should be able to print a program on common paper formats without truncation or line breaks.

Details

Whereas the old restriction to 72 characters was too strict, the full utilization of the 255 characters that are now available would not make a program any more legible. Although very large monitors are now available, it can still be necessary, for example, for code inspections or reviews, to print a program or program section. It is therefore advisable to break long [statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstatement_guidl.htm "Guideline") at suitable positions and to distribute long literals across multiple lines using the literal operator (&) or the concatenation operator (&&).

Note

The example programs in the documentation are restricted in width in a natural way, which makes them legible at the same time. Unfortunately this sometimes means using shorter [names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentelling_names_guidl.htm "Guideline") than would actually be possible.

Example

In the first method of the program PGL\_PROGRAM\_LINE\_WIDTH, a very long literal is assigned to the return value. The literal is not displayed completely even on very wide screens, and in the printout it will be broken up or even truncated.

The second method uses a literal whose content is identical to the one of the previous method; here, however, it is composed of multiple shorter literals using the literal operator &. The literal is split at appropriate positions, and the method becomes more legible both on the screen and the printout.
