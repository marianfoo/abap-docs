# ABAP Keyword Documentation / ABAP Programming Guidelines / Structure and Style

Included pages: 5


### abenstructure_style_guidl.htm

---
title: "Structure and Style"
description: |
  This section covers all aspects of a program that have no direct influence on its functions. These aspects remain hidden to users when they use the program. However, structure and style are very significant for the traceability of the program flow by a human viewer. The source code must be designed
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm"
abapFile: "abenstructure_style_guidl.htm"
keywords: ["do", "if", "abenstructure", "style", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) → 

Structure and Style

This section covers all aspects of a program that have no direct influence on its functions. These aspects remain hidden to users when they use the program. However, structure and style are very significant for the traceability of the program flow by a human viewer. The source code must be designed in such a way that a person other than the program developer can work with it properly. There are many situations in which this is necessary, for example:

-   A review or code inspection is taking place.

-   Another developer needs to examine the program to process an error message (hotline, development support).

-   The program has been completely transferred from the development department to the maintenance department, where it is maintained and possibly developed further.

-   A program that was delivered by an organization (for example, SAP) is to be modified or developed further in other organizations (for example, at SAP partners or customers).

Auch außerhalb einer der genannten Situationen sind ein vernünftiger Programmaufbau und Programmierstil von größter Bedeutung. Schließlich soll sich auch der Entwickler selbst nach einer längeren Pause von der Bearbeitung seines Programms bei Bedarf schnell wieder in seinen Code einfinden können.

Source code needs to be read and understood time and time again during the software lifecycle. In practice, it is not realistic for any program that contains more than a few lines that source code can be delivered just once and will require no further maintenance. As well as complying with general standards such as functional correctness and performance, a program must be developed in such a way that its source code meets the requirements of the human reader.

The following guidelines help produce comprehensible and traceable ABAP source codes. Of course, since “beauty is in the eye of the beholder”, opinions on style vary from individual to individual and are the topic of much discussion. For this reason, the following recommendations are limited to those issues for which there is general consensus. These are mostly generally accepted guidelines that often apply to any programming language. The aim here is not to dictate a specific programming style, but rather to ensure an appropriate programming style. A developer must feel at home with his own sources so that he can work efficiently. Stringent style specifications can sometimes do more harm than good.

-   [Source Code Formatting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformatting_code_guidl.htm "Guideline")

-   [Naming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_guidl.htm "Guideline")

-   [Comments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomments_guidl.htm "Guideline")

-   [Program and Procedure Structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogr_proc_structure_guidl.htm "Guideline")

-   [Source Code Organization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_orga_guidl.htm "Guideline")

-   [Alternative Spellings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_spelling_guidl.htm "Guideline")

-   [Complexity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplexity_guidl.htm "Guideline")

Continue
[Formatting the Source Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformatting_code_guidl.htm)
[Naming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_guidl.htm)
[Comments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomments_guidl.htm)
[Program Structure and Procedure Structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogr_proc_structure_guidl.htm)
[Source Code Organization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_orga_guidl.htm)
[Alternative Spellings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_spelling_guidl.htm)
[Complexity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplexity_guidl.htm)


### abenstatement_guidl.htm

---
title: "Statements per Program Line"
description: |
  Background An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines. Rule Maximum of one statement per program line Write a maximum of one statement in every source
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatement_guidl.htm"
abapFile: "abenstatement_guidl.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "abenstatement", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformatting_code_guidl.htm) → 

Statements per Program Line

Background

An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines.

Rule

Maximum of one statement per program line

Write a maximum of one statement in every source code line. Long statements can and should be split at suitable places. This means the statements can be divided up across consecutive lines.

Details

Using multiple statements in one line makes the source code harder to read. If a line contains an entire control structure, the lack of indentations makes it especially difficult to identify the logical structure. Therefore you should try to avoid using more than one statement in a program line.

Besides reduced readability, using multiple statements in one line can also make the code more difficult to debug. Even in single steps, ABAP Debugger stops a maximum of once per executable program line. This makes it impractical for the debugging process if there is more than one statement in a line.

If a statement spans [multiple lines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenline_width_guidl.htm "Guideline") (which occurs frequently due to the potential length of complex ABAP statements), there should be no empty lines between the parts of the statement. The breaks in the statement should occur at semantically suitable places so that groups with a similar semantic meaning are next to each other, if possible. Indentations should be used to ensure that the statement is as well structured and readable as possible.

Bad Example

The following source code shows a program section with correct syntax but that is poorly laid out and difficult to understand. Even the [Pretty Printer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_pretty_printer_guidl.htm "Guideline") can barely improve the layout of the template displayed here.

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
  Background The alignment of ABAP statements in the source code is not defined in the syntax. There should be a maximum of one statement per line(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatement_guidl.htm 'Guideline'), which can be technically indented and wrapped as require
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuse_pretty_printer_guidl.htm"
abapFile: "abenuse_pretty_printer_guidl.htm"
keywords: ["select", "insert", "loop", "do", "if", "case", "method", "class", "data", "abenuse", "pretty", "printer", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformatting_code_guidl.htm) → 

Using Pretty Printer

Background

The alignment of ABAP statements in the source code is not defined in the syntax. There should be a [maximum of one statement per line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatement_guidl.htm "Guideline"), which can be technically indented and wrapped as required. This makes control structures visible. By inserting blank lines, related source code sections can be grouped, which makes the code easier to read. Note that, in ABAP statements, blanks cannot be added or left out at random. For example, tokens must be separated by at least one blank (especially with operands and operators). In a method call, no blanks are permitted between the name of the method and the opening parenthesis.

Languages with a C-like syntax (where statement blocks within control structures are delimited by curly brackets) provide an inexhaustible source for discussions on how to best make indentations. However, for ABAP the solution is obvious: Every introductory statement (such as IF) has an associated concluding statement (in this case, ENDIF). Event blocks for ABAP runtime environment events are the only exception here. They are introduced by a statement (such as START-OF-SELECTION) but are not concluded with the associated concluding statement. Instead, they are concluded with the next event block. However, [event blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") should only be used in exceptional cases. Introductory and concluding statements are aligned at the same level; the block content is indented.

Pretty Printer can modify the indentation of control structures and the capitalization of keywords and names in the source code at any time (even in display mode).

Rule

Use Pretty Printer consistently and universally

Use Pretty Printer to format source code consistently. If Pretty Printer cannot format the code as required, manual changes are necessary.

Details

We recommend that the use of Pretty Printer to make indentations required to make the source code easy to read. This guarantees that the indentations are consistently based on the logical control structure and that the indentation depth is identical for each program. Implementing this type of formatting by hand is prone to errors and not recommended.

Even though Pretty Printer can be used to adapt the source code to any other style (using the available settings), a consistent and universal style should be selected. The reason for this is that version management and the correction workbench are not designed to ignore purely stylistic differences between source code versions. Therefore, the following Pretty Printer settings are recommended for consistent source code formatting. These settings cover the expectations and working habits of most ABAP developers:

-   Indent statements
    Absolutely essential for a logical program structure that is clearly visible. A [maximum of one statement per program line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstatement_guidl.htm "Guideline") is allowed.

-   Do not insert standard comments
    The standard comment only contains redundant information and it is not adapted, if the source code is changed.

-   Uppercase keywords
    Makes it easier to [understand the source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlower_upper_case_guidl.htm "Guideline") in printed form. In this case, syntax color-coding is usually not visible.

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


### abentelling_names_guidl.htm

---
title: "Descriptive Names"
description: |
  Background A name can include technical and semantic information: -   Technical information can be very versatile. Examples of options in a data object: data type, declaration context, whether a procedure parameter is passed by value or by reference. -   The semantic information indicates the purpos
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentelling_names_guidl.htm"
abapFile: "abentelling_names_guidl.htm"
keywords: ["select", "loop", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abentelling", "names", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_guidl.htm) → 

Descriptive Names

Background

A name can include technical and semantic information:

-   Technical information can be very versatile. Examples of options in a data object: data type, declaration context, whether a procedure parameter is passed by value or by reference.

-   The semantic information indicates the purpose of classes or data types, the content of data objects, how methods work, and so on.

The technical information about a repository object or internal program entity can be viewed directly in ABAP Workbench. This information is also displayed in tooltips or can be displayed with a simple double-click. However, in contrast to purely technical type information, the semantics of a variable are more difficult to identify without the relevant information in the name.

Rule

Use descriptive names

Always choose names that include the semantic information required for your context and that also easy to understand.

Details

The aim is to assign descriptive and self-documenting names. You should always follow a problem-oriented approach instead of an implementation-oriented approach. For example, a truth value should not be named flag. Instead it should have a name that indicates its meaning, such as is\_checked.

When you select a descriptive, problem-oriented name, you should consider the following aspects in particular:

-   Appropriate use of nouns, verbs, and adjectives

-   Meaningful use of abbreviations

-   Appropriate separation of name components

These points are discussed in detail in the following sections. The purely technical information for a named object can be displayed quickly and easily, using double-click navigation in ABAP Workbench. Therefore, this information can be omitted from names and semantic information can be used in names instead.

Any organizations (within SAP or external) that want to specify technical information in addition to semantic information in names, can define their own naming conventions that are based on our semantic rules. However, we believe that encoding technical attributes in names is not suitable for making ABAP programs (developed according to the present guidelines) easier to understand and maintain. This may be different in the context of other programming languages with fewer types and less powerful development environments.

The use of nouns, verbs, and adjectives for naming depends on the entity that you want to name:

-   Packages and package interfaces
    A package comprises a collection of repository objects for a specific subject area. The package name can either consist of one or more singular nouns that describe the subject area (such as sabp\_compiler), or one or more plural nouns that indicate the contained objects (such as sabp\_analyze\_tools). Subpackages start with the name of the super package and contain suffixes that indicate the specialization. The name of a package interface starts with the name of the package. Information about visibility or restrictions to certain consumers are attached as an optional suffix. For example, \_public, stands for public interface and \_verification stands for interface to verification tools.

-   Data types, classes, and interfaces
    They denote categories of things and are therefore named using nouns, for example, cl\_abap\_conv\_codepage. The greater the degree of specialization, the greater the number of nouns required for description. This can result in longer, combined names, for instance, if\_abap\_string\_writer or cl\_abap\_xml\_name\_converter. If necessary, the name can be further specified with an additional adjective, as in if\_serializable\_object and cl\_abap\_weak\_reference. The name of a category is usually written in the singular form. Therefore, a class name should generally consist of singular nouns. However, there are many examples of deviations from this rule, such as cl\_abap\_ memory\_utilities. These classes often do not model a category but instead provide a hodgepodge of loosely related functions, usually in the form of exclusively static methods.

-   Associations
    An association refers to a semantic relationship between a start object and a target object. To make sure this relationship is unambiguous when an association is used in a path, you should prefix the association with TO\_. This should be followed by a name that contains the name of the target object (in the case of non-reflexive associations).

-   Variable data objects and procedure parameters
    These describe attributes and are therefore named with a noun, for instance, cl\_abap\_regex->pattern. Truth values are labeled using the is\_ prefix, which is consistent with natural language usage. If the attribute in question is a quantity (in ABAP, usually an internal table), this should be expressed using the plural form, for example in the interface parameter matches of the method cl\_abap\_matcher->find\_all.

-   Constants
    From a technical point of view, these are data objects with non-modifiable values at program runtime. They describe special, non-modifiable attributes. Values of constants are described with nouns. They are distinguished by a specific attribute (such as minimum size, start value) expressed by one or more additional adjectives. Some examples are cl\_abap\_exceptional\_values=>decfloat34\_max and cl\_abap\_format=>o\_sign\_as\_postfix.

-   Events
    They are named using an expression in present perfect that describes their occurrence, for example, cl\_dd\_form\_element->button\_clicked and cl\_gui\_alv\_ tree->selection\_changed. In this example, the noun is abbreviated significantly (o for output format). More information about useful abbreviations can be found below.

-   Procedures
    New procedures are methods according to the [use ABAP objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") rule. Here, we distinguish between different cases:

-   Event handlers are named after the corresponding event. They are assigned a prefix that identifies them as handler methods. In ABAP, the on\_ prefix has established itself. This is consistent with natural language use and clearly labels a method as an event handler. For the two event examples above, the names of the corresponding handler methods would be on\_ button\_clicked and on\_selection\_changed.

-   The name of methods with a return value (functional methods) describes the returned result. The get\_ prefix is added to describe the task of the method. An example of this is the cl\_abap\_exceptional\_values=>get\_max\_value method. If the method returns a truth value, is\_ is used as a prefix instead of get\_. In ABAP, these get\_ methods are intended to identify the return value (by using a calculation, for example). Unlike in Java, for example, no own methods should be used to simply return attribute values. Instead you should use the [write-protected (READ-ONLY) attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenencapsulation_guidl.htm "Guideline") provided in ABAP.

-   In all other cases, the name of a method describes an activity to be performed. Therefore, the method name is a verb, generally expressed in the imperative. Examples: cl\_abap\_regex->create\_ matcher and cl\_abap\_memory\_utilities=>do\_garbage\_collection. Methods used to set attributes are described using the relevant attribute, which is prefixed with set\_. Other procedures ([function modules and subroutines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) required to wrap method calls are named accordingly.

-   Exception
    Exceptions describe unexpected states. Technically they are classes. [Classic exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_exception_guidl.htm "Guideline") should no longer be used. Except for the prefix, the same considerations apply here. To distinguish exceptions from normal classes, they are assigned their [own prefix](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennames_repos_obj_guidl.htm "Guideline") cx\_, provided that they are global exception classes. The name of an exception reflects the rejected state as clearly as possible, for instance, cx\_sy\_offset\_not\_allowed. If an entire hierarchy of exception classes exists, the names of the superclasses do not describe special exception situations. Instead they describe error categories (such as cx\_ sy\_data\_access\_error in this example).

You should avoid using abbreviations as name components wherever possible. Exceptions to this rule are abbreviations that are usually used instead of the complete term, such as GUI or XML. However, if the use of certain abbreviations cannot be avoided due to restricted space, you should initially use common abbreviations.

If no common abbreviation exists, you should proceed as follows: Vowels are omitted, unless they are the first letter of the word. They are of minor significance for the recognition value. If a word starts with a double vowel, both letters are kept for ease of recognition (for example, outbnd as the abbreviation for outbound instead of otbnd). If further abbreviations are required, you can replace double consonants with single consonants. Even after this step, the word is generally still recognizable.

An example of a poorly chosen abbreviation would be tstmp for timestamp. This abbreviation does not follow the above rules and is not intuitive. Readers would probably initially think of the possible components tst or tmp, which would remind them of test or temporary. However, an association with timestamp is initially very difficult to identify. Therefore, if you create abbreviations, you must ensure that the result is not similar to another, possibly more common abbreviation for a completely different term.

When you create abbreviations in a foreign language, you run the risk that the result represents a word or abbreviation with a completely different meaning. If in doubt, you should enter the abbreviation in a search engine to check it. For example, you only have four characters available and you want to use the word button. In this case, you should select the abbreviation bttn (following the abbreviation rules above), instead of the first four characters.

As a rule, name components should be visually separated using underscores in ABAP. This makes the names easier to read. Separating name components with uppercase and lowercase (common in languages with C-like syntax) is [not useful](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlower_upper_case_guidl.htm "Guideline") in ABAP. Underscores normally identify a name, because ABAP words are usually not formed this way. The only exceptions here are certain format options for character string templates (such as SCIENTIFIC\_ WITH\_LEADING\_ZERO), which can only occur within character string expressions, and certain additions of SELECTION-SCREEN and WRITE.

You should not use digits as name components. They are often a sign of poorly selected names (because they are not very descriptive) or indicate the use of multiple individual variables, where the use of an internal table would make more sense. Exceptions include the interface parameters of procedures. Numbering similar parameters definitely makes sense here.

The use of digits to form phonetic names is also problematic because they require a degree of familiarization, and their meaning is not always obvious to everyone. A particularly bad use of digits is the abbreviation trmn8r for terminator. The commonly used 2 for to is the only justifiable exception here. This is often found as a name component in conversion procedures and can be interpreted easily (convert\_itf\_2\_html, for example).

Notes

-   You must always keep in mind that the information included in a name must remain valid. This applies to semantic information, but especially to technical information. If, for example, technical information included in a name changes due to a refactoring measure, all relevant names and their consumers must be modified. However, this is not an easy task in released interfaces. If in doubt, remember that names containing incorrect information are worse than names that do not provide any information at all. This is why programming guidelines exist that suggest only using nondescript names. Since semantic attributes are less likely to change in the course of (further) development than technical attributes, our predominantly semantic specifications for naming are relatively well safeguarded from program changes.

-   Less is often more. Our suggestions indicate how to compose names to include the information that is necessary in a context. They should only be used when the meaning of the name is not completely obvious from the context. For example:

METHOD do\_something.
  CONSTANTS lcv\_maximum\_do\_loop\_count TYPE i VALUE 100.
  DO lcv\_maximum\_do\_loop\_count TIMES.
    ...
  ENDDO.
ENDMETHOD.

The long name lcv\_maximum\_do\_loop\_count is quite difficult to read. A method can only include a manageable [number of statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenproc_volume_guidl.htm "Guideline"). Therefore, you can select a very simple name in simple cases:

METHOD do\_something.
  CONSTANTS nmax TYPE i VALUE 100.
  DO nmax TIMES.
    ...
  ENDDO.
ENDMETHOD.

A further example of where short names are useful is helper fields declared in [LET expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplet.htm).

Bad Example

The following source code shows the declaration of a class that executes arithmetic calculations. This should be understood as a synthetic naming example. Of course, in ABAP, it makes absolutely no sense to [wrap](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodularization_guidl.htm "Guideline") the arithmetic operations on elementary numeric data types using a class. The names of the class and its methods are unnecessarily short, and the names of the method parameters have no semantic meaning at all.

CLASS calcltr DEFINITION.
  PUBLIC SECTION.
    METHODS: add IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             sub IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             mul IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE i,
             div IMPORTING a        TYPE i
                           b        TYPE i
                 RETURNING VALUE(c) TYPE f.
ENDCLASS.

Good Example

The following source code shows the same class as in the code above, but the names of the class and its methods are now spelled in full, and the names of the method parameters indicate their semantic meaning.

CLASS calculator DEFINITION.
  PUBLIC SECTION.
    METHODS: add IMPORTING addend1           TYPE i
                           addend2           TYPE i
                 RETURNING VALUE(sum)        TYPE i,
        subtract IMPORTING minuend           TYPE i
                           subtrahend        TYPE i
                 RETURNING VALUE(difference) TYPE i,
        multiply IMPORTING factor1           TYPE i
                           factor2           TYPE i
                 RETURNING VALUE(product)    TYPE i,
          divide IMPORTING dividend          TYPE i
                           divisor           TYPE i
                 RETURNING VALUE(quotient)   TYPE f.
ENDCLASS.

The addition and multiplication operands are commutative, which means you can use digits here to distinguish them.


### abenstruc_comp_names_guidl.htm

---
title: "Names of Structure Components"
description: |
  Background When ABAP programs are executed, the names of data objects usually only have the task of identifying the data objects uniquely. The ABAP statements operate directly with the objects in question without attaching any special meaning to their names. The names of structure components are an
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstruc_comp_names_guidl.htm"
abapFile: "abenstruc_comp_names_guidl.htm"
keywords: ["select", "do", "if", "case", "class", "data", "types", "internal-table", "abenstruc", "comp", "names", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Naming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_guidl.htm) → 

Names of Structure Components

Background

When ABAP programs are executed, the names of data objects usually only have the task of identifying the data objects uniquely. The ABAP statements operate directly with the objects in question without attaching any special meaning to their names. The names of structure components are an exception here. They are evaluated in the following cases:

-   When structure components are assigned using

-   the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm)

-   the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expr_corresponding.htm)

-   the system class [CL\_ABAP\_CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding.htm)

-   In ABAP SQL, in the addition [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinto_clause.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm)

-   In [obsolete calculation statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomputing_obsolete.htm) like [ADD-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapadd-corresponding.htm)

In these language constructs, the names of the components of the structures in question are compared and the operation is executed using the identically named components (if not overridden by a mapping rule).

Rule

Give structure components with the same meaning the same names

Give the components of structures that have the same meaning within a data model the same names

Details

This rule mainly applies to data models defined in ABAP Dictionary (including ABAP CDS). If one of the CORRESPONDING constructs above is used in an ABAP program to access structures or structured internal tables (and the structured types of these structures or tables are defined like database tables or CDS entities using types from the data model in ABAP Dictionary), it is essential that components from different structures but with the same semantics have the same name.

Bad Example

The database tables DOKIL DOKHL, and DOKTL are in the same package and the same application. The column whose type is determined by the data element DOKVERS has the same name (DOKVERSION) in DOKHL and DOKTL, but the name in DOKIL is VERSION.

Good Example

Columns of the familiar structures used in the flight data model in training and documentation that have the same semantics usually also have the same names.
