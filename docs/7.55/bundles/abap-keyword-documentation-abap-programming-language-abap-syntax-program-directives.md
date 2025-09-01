# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP Syntax / Program Directives

Included pages: 6


### abenprogram_directives.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) → 

Program Directives

The ABAP [program directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directive_glosry.htm "Glossary Entry") allow source-code-based development objects to be documented or affect the check results of various check tools.

-   [ABAP Doc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendoccomment.htm)

-   [Pragmas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpragma.htm)

-   [Pseudo comments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment.htm)

Continue
[ABAP Doc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendoccomment.htm)
[Pragmas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpragma.htm)
[Pseudo Comments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment.htm)


### abendoccomment.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directives.htm) → 

ABAP Doc

ABAP Doc allows [declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_glosry.htm "Glossary Entry") in ABAP programs to be documented, based on special ABAP Doc comments. In an ABAP development environment , such as [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"), which supports [ABAP Doc](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"), the content of ABAP Doc comments is evaluated, converted to HTML, and then displayed appropriately.

-   [ABAP Doc Comments](#@@ITOC@@ABENDOCCOMMENT_1)

-   [Parameter Interface of Procedures](#@@ITOC@@ABENDOCCOMMENT_2)

-   [Formatting](#@@ITOC@@ABENDOCCOMMENT_3)

-   [Short Texts and Their Synchronization](#@@ITOC@@ABENDOCCOMMENT_4)

-   [Documentation Links](#@@ITOC@@ABENDOCCOMMENT_5)

-   [Test Relations](#@@ITOC@@ABENDOCCOMMENT_6)

ABAP Doc Comments

A comment for ABAP Doc is introduced by the string "!. This is a special form of a normal [line end comment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomment.htm) that is introduced by ". The following rules must be followed to insure that an ABAP Doc comment is evaluated correctly:

-   An ABAP Doc comment is one of the following:

-   A single [comment line](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomment_line_glosry.htm "Glossary Entry") that only contains the comment

-   A multiline block of consecutive comment lines. The content of a block is summarized into a single ABAP Doc comment.

-   An ABAP Doc comment (a line or a line block) must be linked as follows to one [declaration statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_statement_glosry.htm "Glossary Entry") only:

-   If the declaration statement does not form a [chained statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_statement_glosry.htm "Glossary Entry"), an ABAP Doc comment can be located directly in front of the declaration statement and cannot be separated by empty lines.

-   If the declaration statement forms a [chained statement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchained_statement_glosry.htm "Glossary Entry"), the colon must be placed after the keyword. An ABAP Doc comment can be placed in front of the identifier of each declared entity.

ABAP Doc comments are not allowed at any other positions.

-   A single-line ABAP Doc comment cannot be empty. Lines without content are allowed as a mean of formatting in blocks.

-   An ABAP Doc comment can contain special tokens and tags for documenting the parameter interface of procedures, or for formatting purposes.

-   The special characters ", ', <, \>, @, {, |, and } can, if necessary, be masked using &quot;, &apos;, &lt;, &gt;, &#64;, &#123;, &#124;, and &#125;.

A violation of this rule produces a syntax check warning.

Example

Basic use of ABAP Doc comments as single lines, blocks and chained statements.

"! Basic usage of ABAP Doc
CLASS demo DEFINITION.
  PUBLIC SECTION.
    "! Constant character string for a single blank.
    CONSTANTS blank TYPE string VALUE \` \`.
    "! Method to fill the private structure struct with values
    "! and append it to internal table itab.
    METHODS meth.
  PRIVATE SECTION.
    DATA:
      "! Three-component structure
      BEGIN OF struct,
        "! Component one
        comp1 TYPE i,
        "! Component two
        comp2 TYPE i,
        "! Component three
        comp3 TYPE i,
      END OF struct,
      "! Internal table of structure struct
      itab LIKE TABLE OF struct.
ENDCLASS.

Parameter Interface of Procedures

The [parameter interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of [procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") and of [events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_glosry.htm "Glossary Entry") in classes can be documented in the corresponding ABAP Doc commentary with a special syntax:

Documentation for

Syntax

Interface parameters

@parameter name|documentation

Class-based exception

@raising name|documentation

Classic exceptions

@exception name|documentation

The specification of @parameter, @raising, and @exception must be placed directly after "! and thus introduce a new line. The name (name) of an existing parameter or an exception must be specified after @parameter, @raising, @exception. This must be followed by the corresponding documentation, separated by |. This documentation is closed by the next @parameter, @raising, @exception or by the end of the ABAP Doc comment. No further documentation can be placed behind an interface documentation as another interface documentation. Each interface parameter or every exception can only be specified once.

Hint

The arrangement of the parameter interface documentation of procedures does not depend on the order of the corresponding declarations. For reasons of readability, however, the order of the parameters and exceptions in the ABAP Doc comment should be the same as the order of the declarations.

Example

Use of ABAP Doc comments for the parameter interface of a method.

"! Method to check if two sources are identical
"! and that returns a corresponding boolean value.
"!
"! @parameter source1     | First source
"! @parameter source2     | Second source
"! @parameter ignore\_case | Pass abap\_true to ignore case
"!
"! @parameter result      | Returns abap\_true if sources are identic
"!
"! @raising   cx\_invalid\_source
"!                        | One of the sources is empty
METHODS compare
  IMPORTING
    source1       TYPE text
    source2       TYPE text
    ignore\_case   TYPE abap\_bool DEFAULT abap\_false
  RETURNING
    VALUE(result) TYPE abap\_bool
  RAISING
    cx\_invalid\_source.

Formatting

The following tags can be used within the documentation texts of ABAP Doc comments, to format the output of the documentation in a suitable development environment. These tags are a subset of the HTML tags.

Formatting

Tag

Header, level1

<h1>...</h1>

Header, level2

<h2>...</h2>

Header, level3

<h3>...</h3>

Paragraph

<p>...</p>

Italic text

<em>...</em>

Bold text

<strong>...</strong>

Unnumbered list

<ul><li>...</li>...<li>...</li></ul>

Numbered list

<ol><li>...</li>...<li>...</li></ol>

Line break

<br>

An open tag must be closed before a new section of the ABAP Doc comment starts. A new section is introduced by @parameter, @raising or @exception.

The following attributes are possible:

-   In the <ol> tag, the attributes reversed, start, and type can be specified with their usual HTML meaning.

-   In the <p> tag, the attributes class and lang can be specified. For more information about the meaning of these attributes, see "Short Texts and Their Synchronization".

Example

Use of formatting in an ABAP Doc comment for a class. The [ABAP Development Tools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry") display the documentation according to the formatting.

"!<h1>Class demo</h1>
"!<p>This class must <strong>not</strong> be used productively.</p>
"!The class serves the following tasks:
"!<ul><li>Demo 1</li>
"!    <li>Demo 2</li>
"!    <li>Demo 3</li></ul>
"!<br><br>
CLASS demo DEFINITION.
  ...
ENDCLASS.

Short Texts and Their Synchronization

Parts of ABAP Doc comments can be marked as short texts and the short texts of classes and function modules and their components can be synchronized with ABAP Doc comments. To mark a part of an ABAP Doc comment as a short text, it can be tagged as follows:

<p class="shorttext">...</p>

A paragraph tagged like this is displayed as a header when displaying the documentation in [ADT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry") , instead of the short text shown in ABAP Workbench .

To synchronize the ABAP Doc short texts and the short texts stored as system documentation, the tag can be specified as follows (this is optional):

<p class="shorttext synchronized">...</p>

In this case, the length of the short text in ABAP Doc is restricted to the length of the corresponding short text of the system documentation and is synchronized with the associated short text in the [original language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoriginal_langu_guidl.htm "Guideline") of the class or function module as follows:

-   When an ABAP Doc short text is created or modified in the source code, the corresponding short text of the repository object is used when the source code is saved. If the short text in ABAP Doc is empty, the short text of the repository object is deleted. If class="shorttext synchronized" is used to remove a full paragraph, the short text of the repository object is preserved. This synchronization works independently of the tool used.

-   If a short text of a method or a function module in the system documentation is modified, for which a paragraph with class="shorttext synchronized" occurs in ABAP Doc, the short text is replaced accordingly in the source text when saving. When a short text in the system documentation is deleted, an empty paragraph is produced. When a new short text is created in the system documentation for which there is not yet a short text in ABAP Doc, it does not yet lead to the creation of the paragraph in the source code.

An ABAP Doc short text is part of the source code and is not connected to the translation. Since it replaces the translatable short text of the repository object in its original language connected to the translation during synchronization, it must also be specified in the original language. This is a deviation from the rule that ABAP Doc comments must always be in English. The original language can be marked in the source code by being specified as follows (this is optional):

<p class="shorttext" lang="...">...</p>

The attribute lang uses the HTML standard. It must be used to specify the original language of the repository object as a two-character ISO code, otherwise, a syntax check warning occurs. This attribute makes it clear in which language the short text should be specified in the source code. It is also intended for future enhancements regarding the translatability of short texts.

Example

See the class CL\_DEMO\_ABAP\_DOC in a source code editor. It contains ABAP Doc comments for the class itself, a type, a method, and its parameters, and an attribute. The ABAP Doc comments contain short texts that are synchronized with the short texts in the system documentation in the original language English. The class can be copied to a personal temporary class to test the synchronization.

Documentation Links

In an ABAP Doc comment, the following syntax can be used to refer to the documentation of other repository objects:

... {@link *\[**\[**\[*kind:*\]*name.*\]*...*\]**\[*kind:*\]*name} ...

In curly brackets after @link, a path specification for a repository object is made, which refers to its documentation. When the documentation is displayed in [ADT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry"), a link is created at this position that displays the documentation of the repository object if it is available, when it is selected.

-   name is used to specify the name of a repository object or a component of a repository object, which is not case-sensitive.

-   kind is used to specify the type of the repository object or a component of a repository object. kind must be specified as shown for the following repository objects:

-   DATA for constants, variables, and procedure parameters in the appropriate context

-   DOMA for [domains](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendomain_glosry.htm "Glossary Entry")

-   EVNT for [events](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevent_glosry.htm "Glossary Entry") in classes

-   FUNC for [function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_module_glosry.htm "Glossary Entry") in function pools

-   FORM for [subroutines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubroutine_glosry.htm "Glossary Entry") in programs

-   FUGR for [function pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_pool_glosry.htm "Glossary Entry")

-   INTF for [interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoo_intf_glosry.htm "Glossary Entry") implemented in a class to access its components.

-   METH for [methods](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmethod_glosry.htm "Glossary Entry")

-   PROG for [ABAP programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_glosry.htm "Glossary Entry")

-   SEAM for [test seams](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_seam_glosry.htm "Glossary Entry")

-   XSLT for [XSLT programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxslt_program_glosry.htm "Glossary Entry") and [simple transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensimple_transformation_glosry.htm "Glossary Entry")

kind cannot and must not be specified for global data types and object types (classes and interfaces). These repository objects are solely addressed by their names. This applies specifically to [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry").

-   When a repository object is addressed, the path specification is usually single-level. When a component of a repository is addressed, for example a method of a class or a local class of a program, the path specification is usually multi-leveled, whereby each segment is separated by a period (.). The segments between the periods can also be empty. This turns the path into a relative path and the next higher context of the current context is addressed.

Example

Documentation of a local class html of a program using ABAP Doc comments that contain references to the documentation of a global class and to the ABAP Doc documentation of the current program.

"! Default html string for method {@link .html.METH:show}
"! of local class {@link .html}.
CONSTANTS
  default TYPE string VALUE \`<html><body>Default</body><html>\`.
"! <h1>Class html</h1>
"! Wraps {@link cl\_abap\_browser}.
CLASS html DEFINITION.
  PUBLIC SECTION.
    "! <h1>Method show</h1>
    "! Calls {@link cl\_abap\_browser.METH:show\_html}
    "! of {@link cl\_abap\_browser}
    "! and passes parameter {@link .METH:show.DATA:html }.
    "! @parameter html | Parameter for
    "! {@link cl\_abap\_browser.METH:show\_html.DATA:html\_string}.
    "! The default value is {@link ..DATA:default}.
    METHODS show
      IMPORTING
        html TYPE string DEFAULT default.
ENDCLASS.
CLASS html IMPLEMENTATION.
  METHOD show.
    cl\_abap\_browser=>show\_html( html\_string = html ).
  ENDMETHOD.
ENDCLASS.

Test Relations

The following syntax can be used to define so called test relations in front of the declaration of a [test class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_class_glosry.htm "Glossary Entry") or a [test method](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentest_method_glosry.htm "Glossary Entry"):

"! @testing *\[*kind:*\]*name

This special ABAP Doc comment links the test class or test method with the repository object specified after @testing.

-   name is used to specify the name of a repository object, which is not case-sensitive.

-   Kind is used to specify the type of the repository object. The following repository objects are possible and kind must be specified as shown:

-   FUNC for [function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_module_glosry.htm "Glossary Entry") in function pools

-   FUGR for [function pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_pool_glosry.htm "Glossary Entry")

-   XSLT for [XSLT programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenxslt_program_glosry.htm "Glossary Entry") and [simple transformations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensimple_transformation_glosry.htm "Glossary Entry")

kind cannot and must not be specified for global classes and [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"). They are solely addressed by their names.

When a test class or test method is linked with a repository object, it means that it can be displayed and executed for this object in [ADT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenadt_glosry.htm "Glossary Entry").

Hints

-   Test relations are used to link repository objects with external [unit tests](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunit_test_glosry.htm "Glossary Entry"). The current program of the test class or test method cannot be specified.

-   Multiple test relations can be specified for a single test class or test method .

Example

Associates a test class and its test methods with various repository objects.

"! @testing cl\_demo1
"! @testing cl\_demo2
CLASS test\_demo\_cds\_association DEFINITION FOR TESTING.
  PRIVATE SECTION.
    METHODS:
     test\_class1 FOR TESTING,
     test\_class2 FOR TESTING,
     "! @testing demo\_cds\_view
     test\_cds\_view FOR TESTING,
     "! @testing XSLT:demo\_trafo
     test\_transformation FOR TESTING.
ENDCLASS.

Programming Guidelines

-   The following guidelines for general comments also specifically apply to ABAP Doc comments.

-   [Comments on programs in English](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlangu_choice_guidl.htm "Guideline")
    Adhering to this rule is particularly important, because documentation created in an ABAP Doc as part of the source code is not translated into other languages. One exception are synchronized short texts.
    

-   [Arranging comments correctly](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarrange_guidl.htm "Guideline")
    This rule affects the horizontal indents because the vertical alignment syntactically fixed before declarations.
    

-   [Character set in source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharacter_set_guidl.htm "Guideline")
    This rule is checked by the syntax check.


### abenpragma.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directives.htm) → 

Pragmas

Pragmas are [program directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directive_glosry.htm "Glossary Entry") that can be used to hide warnings of various check tools. The following are supported:

-   Warnings of the ABAP Compiler [syntax check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensyntax_check_glosry.htm "Glossary Entry")

-   Warnings of the [extended program check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenextended_program_check_glosry.htm "Glossary Entry")

For more information, see:

-   [Positioning of Pragmas in ABAP Source Code](#@@ITOC@@ABENPRAGMA_1) transportable

Syntax

A pragma is structured as follows:

##code\[par\]\[par\]...

It is not case-sensitive and does not contain blanks. The pragma code (code) determines the effect and parameters (par) further restrict the effect if necessary.

A message is affected by a pragma if all the parameters specified match the concrete parameters. The concrete parameters can also be taken from the long text of the message. Compulsory parameters are underlined in the long text and must not be omitted. Non-compulsory parameters are optional. Optional parameters can be omitted using empty parentheses \[\] at the appropriate position or by completely omitting an end part.

Hints

-   The existence of a pragma for a system check warning can be checked using the long text of the message, which in this case always exists. The description of a message in the extended program check is also lists the pragma, which can be used to hide it.

-   Pragmas replace the previously used [pseudo comments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_slin.htm) to hide warnings from the extended program check. These pseudo comments therefore are obsolete and should no longer be used. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.

-   In a program that uses pragmas to deactivate warnings, the statement [SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_extended_check.htm) and the [pseudo comment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_slin.htm) #EC \* can no longer be used and produce an extended program check warning that cannot be deactivated.

-   A pragma in a type definition made using [TYPES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptypes.htm) -for example, to hide the warning for redundant secondary keys of table types- can also be applied to data declarations using [DATA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata.htm) in the case of non-generic types and related statements that reference the data type using [TYPE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdata_referring.htm). If a reference is made to a generic data type defined using TYPES, that is, a table type for which no primary table key is defined, a pragma specified there is not applied to the data declaration, since it implicitly uses a full table type implicitly and the pragma must potentially be specified again.

Example

An example of a pragma for syntax check warnings is:

##SHADOW

This pragma can be used to hide a syntax warning in a method definition that reports the hiding of a built-in function. The pragma has an optional parameter in which the name of the function can be specified as well.

##SHADOW\[SUBSTRING\]

A warning about "SUBSTRING" is suppressed using one of the following:

-   ##SHADOW

-   ##SHADOW\[SUBSTRING\]

-   ##SHADOW\[\]

but not using SHADOW\[FIND\].

Example

An example of pragmas for hiding warnings from the extended program check is:

DATA TEXT TYPE STRING   ##needed.

text  = 'Hello Pragmas' ##no\_text.

Examples

In some executable examples for key accesses to internal tables ([read](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenread_itab_using_key_abexa.htm), [delete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendelete_itab_using_key_abexa.htm)), syntax warnings are hidden by the associated pragma. The pragmas were found in the long text of the syntax warnings.

Positioning of Pragmas in ABAP Source Code

A pragma applies to the current statement, that is to the statement that ends at the next "." or ",". Pragmas in front of the ":" of a chained statement apply to the entire chained statement. Pragmas that are used when calling a [macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_glosry.htm "Glossary Entry") apply to all statements of the macro.

Pragmas must only be used at specific positions in the source code for reasons of readability, namely:

-   At the start of a line, after any number of blanks

-   At the end of a line, only followed by ".", ",", or ":".

-   Not after ".", ",", or ":".
    Multiple pragmas may be positioned one after another -separated by blanks- at allowed positions.

Unknown, formally incorrect, or incorrectly parameterized pragmas lead to a syntax warning. Incorrectly positioned pragmas for warnings in the syntax check have no effect. warning.


### abenpseudo_comment.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directives.htm) → 

Pseudo Comments

Pseudo comments are [program directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directive_glosry.htm "Glossary Entry") for influencing checks and test runs. Pseudo comments have mostly become [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comments_obsolete.htm) and have been replaced by [pragmas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpragma.htm) or real additions.

Non-Obsolete Pseudo Comments

-   [Pseudo Comments for Code Inspector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_ci.htm)

Obsolete Pseudo Comments

-   [Pseudo Comments for the Extended Program Check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_slin.htm)

-   [Pseudo Comments for Test Classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_test_class.htm)

Hint

Only one pseudo comment can be specified per program line. To specify multiple pseudo comments for a statement, they must be split into multiple lines.

Continue
[Pseudo Comments for Code Inspector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_ci.htm)


### abenpseudo_comment_ci.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directives.htm) →  [Pseudo Comments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment.htm) → 

Pseudo Comments for Code Inspector

The character string "#EC behind a statement or a part of a statement followed by an abbreviation with the prefix CI\_ defines a [pseudo comment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for the [Code Inspector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencode_inspector_glosry.htm "Glossary Entry").

These pseudo comments can be used to hide certain warnings from Code Inspector for the relevant statement. The possible abbreviations are documented with the Code Inspector or in the output of its messages.

Hints

-   Until now, only the pseudo comments for the Code Inspector have not been replaced by other language elements.

-   To hide multiple warnings from a statement with pseudo comments, the statement must be split into multiple lines.

Example

The following [join expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenjoin_expression_glosry.htm "Glossary Entry") bypasses [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry"), which raises a warning of the Code Inspector. However, if the SELECT statement is part of an application that buffers selected data itself, however, the warning can be hidden as shown here. An additional regular comment illustrates to the user why the pseudo comment is being used.

SELECT d~object, h~dokldate, h~dokltime   "#EC CI\_BUFFJOIN
  FROM dokil AS d                         "Buffering is done
       INNER JOIN dokhl AS h              "by application
         ON h~id         = d~id     AND   "with Shared Objects
            h~object     = d~object AND
            h~typ        = d~typ    AND
            h~langu      = d~langu  AND
            h~dokversion = d~version
  WHERE d~id    ='SD'    AND
        d~typ   = 'E'    AND
        d~langu = @langu AND
        d~object LIKE 'AB%'
  INTO CORRESPONDING FIELDS OF TABLE docu\_tab.


### abenpseudo_comment.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directives.htm) → 

Pseudo Comments

Pseudo comments are [program directives](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_directive_glosry.htm "Glossary Entry") for influencing checks and test runs. Pseudo comments have mostly become [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comments_obsolete.htm) and have been replaced by [pragmas](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpragma.htm) or real additions.

Non-Obsolete Pseudo Comments

-   [Pseudo Comments for Code Inspector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_ci.htm)

Obsolete Pseudo Comments

-   [Pseudo Comments for the Extended Program Check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_slin.htm)

-   [Pseudo Comments for Test Classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_test_class.htm)

Hint

Only one pseudo comment can be specified per program line. To specify multiple pseudo comments for a statement, they must be split into multiple lines.

Continue
[Pseudo Comments for Code Inspector](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpseudo_comment_ci.htm)
