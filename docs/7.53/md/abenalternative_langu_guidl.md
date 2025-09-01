---
title: "Alternative Language Constructs"
description: |
  Background Alternative language constructs are parts of statements that can be written in different ways. One reason for this are the constant new developments in the language. Often, new spellings are introduced and the old spellings retained for reasons of downward-compatibility. Rule Use consiste
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_langu_guidl.htm"
abapFile: "abenalternative_langu_guidl.htm"
keywords: ["do", "while", "if", "try", "method", "data", "types", "abenalternative", "langu", "guidl"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Alternative Spellings](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenalternative_spelling_guidl.htm) → 

Alternative Language Constructs

Background

Alternative language constructs are parts of statements that can be written in different ways. One reason for this are the constant new developments in the language. Often, new spellings are introduced and the old spellings retained for reasons of downward-compatibility.

Rule

Use consistent spelling

If there is more than one spelling for a statement, choose one of these spellings and use it consistently throughout your development work It is best to choose the spelling that most accurately reflects the semantics of the statement.

Details

To make your programming easier to understand, always choose the spelling that is most accurate and easiest to read, and which (where applicable) matches the spelling used in other statements. The following list contains some examples:

-   If you can choose from a range of relational operators (\= or EQ, \> or GT, < or LT, \>= or GE, <= or LE) we recommend that you pick a type of operator and stick to it within the context of a program. The variant with the characters =, <, and > is seen as more modern, but also overloads these characters. The relational operators that consist of two letters are better matched to other relational operators such as CO, CN, and so on, which have no alternative forms.

-   The addition NOT of the [relational operators](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrel_operator_glosry.htm "Glossary Entry") BETWEEN, IN, IS ASSIGNED, IS BOUND, IS INSTANCE OF, IS INITIAL, and IS SUPPLIED is a better option than the identical Boolean operator NOT, for improved readability. For example, the expression a IS NOT INITIAL is easier than the logically identical expression NOT a IS INITIAL. This corresponds to the definition of comparison expressions, where a <> b is more intuitive than NOT a = b.

-   The addition LENGTH len of the declarative statements DATA and TYPES is preferable to the length specified in parentheses (len). This then matches the spelling used in CREATE DATA ... LENGTH. In addition to this, it is easy to mistake the parenthesized form for [dynamic tokens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_prog_technique_guidl.htm "Guideline"). Only dynamic tokens should use this form.

-   The optional addition SUBSTRING of the statements FIND and REPLACE can be used to make a clearer distinction from the alternative addition REGEX.

-   In ABAP SQL, comma-separated lists are preferable to lists without commas. Using commas as separators is the prerequisite for using expressions in lists. [Host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_variable_glosry.htm "Glossary Entry") should always be indicated by the escape character @.

-   Within the parameter list of the statements EXPORT and IMPORT, use the equals sign (=) instead of the additions FROM or TO. The spelling then matches the spelling used in parameter lists in other calls, such as methods, functions modules, and transformations.

-   Always use the semantically identical addition ACTUAL LENGTH instead of the addition LENGTH of the statement READ DATASET. This makes the distinction from the similar addition MAXIMUM LENGTH clearer. The last two examples are typical of the way new additions are added to the language, while retaining the old spelling (in a shortened form) for reasons of downward compatibility.

Bad Example

The following piece of source code shows how the statement FIND is used inconsistently within a program. The first and third FIND statements are alternative spellings with the same meaning.

DATA text TYPE string.
...
FIND '...' IN text.
...
FIND REGEX '...' IN text.
...
FIND SUBSTRING '...' IN text.
...

Good Example

The following piece of source code shows the same statements as in the example above, but with consistent spelling. This expresses the semantic distinction between searching for a substring and searching for a regular expression in clear syntax.

DATA text TYPE string.
...
FIND SUBSTRING '...' IN text.
...
FIND REGEX '...' IN text.
...
FIND SUBSTRING '...' IN text.
...