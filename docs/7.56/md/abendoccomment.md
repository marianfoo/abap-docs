  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Syntax Elements of an ABAP Program](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) → 

ABAP Doc

ABAP Doc allows [declarations](javascript:call_link\('abendeclaration_glosry.htm'\) "Glossary Entry") in ABAP programs to be documented, based on special ABAP Doc comments. In tools of an [ABAP development environment](javascript:call_link\('abenabap_dev_envir_glosry.htm'\) "Glossary Entry"), such as [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), that support [ABAP Doc](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), the content of ABAP Doc comments is evaluated, converted to HTML, and then displayed appropriately.

-   [ABAP Doc Comments](#@@ITOC@@ABENDOCCOMMENT_1)
-   [Parameter Interface of Procedures](#@@ITOC@@ABENDOCCOMMENT_2)
-   [Formatting](#@@ITOC@@ABENDOCCOMMENT_3)
-   [Short Texts and Their Synchronization](#@@ITOC@@ABENDOCCOMMENT_4)
-   [Documentation Links](#@@ITOC@@ABENDOCCOMMENT_5)
-   [Test Relations](#@@ITOC@@ABENDOCCOMMENT_6)

ABAP Doc Comments

A comment for ABAP Doc is introduced by the string "!. This is a special form of a regular [line end comment](javascript:call_link\('abencomment.htm'\)) that is introduced by ". The following rules must be followed to ensure that an ABAP Doc comment is evaluated correctly:

-   An ABAP Doc comment is one of the following:
    -   A single [comment line](javascript:call_link\('abencomment_line_glosry.htm'\) "Glossary Entry") that only contains the comment
    -   A multiline block of consecutive comment lines. The content of a block is summarized into a single ABAP Doc comment.
-   An ABAP Doc comment (a line or a line block) must be linked as follows to one [declaration statement](javascript:call_link\('abendeclaration_statement_glosry.htm'\) "Glossary Entry") only:
    
    -   If the declaration statement does not form a [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry"), an ABAP Doc comment can be located directly in front of the declaration statement and cannot be separated by empty lines.
    -   If the declaration statement forms a [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry"), the colon must be placed after the keyword. An ABAP Doc comment can be placed in front of the identifier of each declared entity.
    
    ABAP Doc comments are not allowed at any other positions.
    
-   A single-line ABAP Doc comment cannot be empty. Lines without content are allowed as a mean of formatting in blocks.
-   An ABAP Doc comment can contain special tokens and tags for documenting the parameter interface of procedures, or for formatting purposes.
-   The special characters ", ', <, \>, @, {, |, and } can, if necessary, be escaped using &quot;, &apos;, &lt;, &gt;, &#64;, &#123;, &#124;, and &#125;.

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

The [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") of [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") and of [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") in classes can be documented in the corresponding ABAP Doc commentary with a special syntax:

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
"!                        | One of the sources is empty
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

Use of formatting in an ABAP Doc comment for a class. The [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") display the documentation according to the formatting.

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

A paragraph tagged like this is displayed as a header when displaying the documentation in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") , instead of the short text shown in ABAP Workbench .

To synchronize the ABAP Doc short texts and the short texts stored as system documentation, the tag can be specified as follows (this is optional):

<p class="shorttext synchronized">...</p>

In this case, the length of the short text in ABAP Doc is restricted to the length of the corresponding short text of the system documentation and is synchronized with the associated short text in the [original language](javascript:call_link\('abenoriginal_langu_guidl.htm'\) "Guideline") of the class or function module as follows:

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

In curly brackets after @link, a path specification for a repository object is made, which refers to its documentation. When the documentation is displayed in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a link is created at this position that displays the documentation of the repository object if it is available, when it is selected.

-   name is used to specify the name of a repository object or a component of a repository object, which is not case-sensitive.
-   kind is used to specify the type of the repository object or a component of a repository object. kind must be specified as shown for the following repository objects:
    
    -   DATA for constants, variables, and procedure parameters in the appropriate context
    -   DOMA for [DDIC domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry")
    -   EVNT for [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") in classes
    -   FUNC for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in function pools
    -   FORM for [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") in programs
    -   FUGR for [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry")
    -   INTF for [interfaces](javascript:call_link\('abenoo_intf_glosry.htm'\) "Glossary Entry") implemented in a class to access its components.
    -   METH for [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry")
    -   PROG for [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry")
    -   SEAM for [test seams](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry")
    -   XSLT for [XSLT programs](javascript:call_link\('abenxslt_program_glosry.htm'\) "Glossary Entry") and [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry")
    
    kind cannot and must not be specified for global data types and object types (classes and interfaces). These repository objects are solely addressed by their names. This applies specifically to [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").
    
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

The following syntax can be used to define so called test relations in front of the declaration of a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") or a [test method](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry"):

"! @testing *\[*kind:*\]*name

This special ABAP Doc comment links the test class or test method with the repository object specified after @testing.

-   name is used to specify the name of a repository object, which is not case-sensitive.
-   Kind is used to specify the type of the repository object. The following repository objects are possible and kind must be specified as shown:
    
    -   FUNC for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in function pools
    -   FUGR for [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry")
    -   XSLT for [XSLT programs](javascript:call_link\('abenxslt_program_glosry.htm'\) "Glossary Entry") and [Simple Transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry")
    
    kind cannot and must not be specified for global classes and [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). They are solely addressed by their names.
    

When a test class or test method is linked with a repository object, it means that it can be displayed and executed for this object in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Hints

-   Test relations are used to link repository objects with external [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry"). The current program of the test class or test method cannot be specified.
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
-   [Comments on programs in English](javascript:call_link\('abencomment_langu_guidl.htm'\) "Guideline")
    
    Adhering to this rule is particularly important, because documentation created in an ABAP Doc as part of the source code is not translated into other languages. One exception are synchronized short texts.
    
-   [Arranging comments correctly](javascript:call_link\('abenarrange_guidl.htm'\) "Guideline")
    
    This rule affects the horizontal indents because the vertical alignment syntactically fixed before declarations.
    
-   [Character set in source code](javascript:call_link\('abencharacter_set_guidl.htm'\) "Guideline")
    
    This rule is checked by the syntax check.