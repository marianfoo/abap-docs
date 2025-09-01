# ABAP Keyword Documentation / ABAP − Reference / ABAP Syntax / Program Directives

Included pages: 6


### abenprogram_directives.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) → 

Program Directives

The ABAP [program directives](javascript:call_link\('abenprogram_directive_glosry.htm'\) "Glossary Entry") enable source-code-based development objects to be documented or modify the check results of various check tools.

-   [ABAP Doc](javascript:call_link\('abendoccomment.htm'\))

-   [Pragmas](javascript:call_link\('abenpragma.htm'\))

-   [Pseudo Comments](javascript:call_link\('abenpseudo_comment.htm'\))

Continue
[ABAP Doc](javascript:call_link\('abendoccomment.htm'\))
[Pragmas](javascript:call_link\('abenpragma.htm'\))
[Pseudo Comments](javascript:call_link\('abenpseudo_comment.htm'\))


### abendoccomment.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) → 

ABAP Doc

ABAP Doc allows [declarations](javascript:call_link\('abendeclaration_glosry.htm'\) "Glossary Entry") in ABAP programs to be documented, based on special ABAP Doc comments. ABAP development environments that support [ABAP Doc](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), such as [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), analyze the content of ABAP Doc comments, convert it to HTML, and display it appropriately.

-   [ABAP Doc Comments](#@@ITOC@@ABENDOCCOMMENT_1)

-   [Parameter Interface of Procedures](#@@ITOC@@ABENDOCCOMMENT_2)

-   [Formatting](#@@ITOC@@ABENDOCCOMMENT_3)

-   [Short Texts and Their Synchronization](#@@ITOC@@ABENDOCCOMMENT_4)

-   [Documentation Links](#@@ITOC@@ABENDOCCOMMENT_5)

-   [Test Relations](#@@ITOC@@ABENDOCCOMMENT_6)

-   [Guidelines](#@@ITOC@@ABENDOCCOMMENT_7)

ABAP Doc Comments

A comment for ABAP Doc is introduced using the string "!. This is a special form of a normal [line end comment](javascript:call_link\('abencomment.htm'\)) that is introduced using ". The following rules must be applied if an ABAP Doc comment is to be read correctly:

-   An ABAP Doc comment is one of the following:

-   A single [comment line](javascript:call_link\('abencomment_line_glosry.htm'\) "Glossary Entry") that only contains the comment

-   A multiline block of consecutive comment lines The content of a block is summarized into a single ABAP Doc comment.

-   An ABAP Doc comment (a line or a block of lines) must be linked to one [declaration statement](javascript:call_link\('abendeclaration_statement_glosry.htm'\) "Glossary Entry") only:

-   If the declaration statement does not create a [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry"), an ABAP Doc comment can be placed directly in front of the declaration statement, without using spaces as separators.

-   If the declaration statement makes a [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry"), the colon must be placed after the keyword. An ABAP Doc comment can be placed in front of the identifier of every declared entity.

ABAP Doc comments are not allowed anywhere else.

-   A one-line ABAP Doc comment cannot be empty. Lines without content can be used as formatting in blocks.

-   An ABAP Doc comment can contain special tokens and tags for documenting the parameter interface of procedures, or for formatting.

-   The special characters ", ', <, \>, @, {, |, and } can, if necessary, be masked using &quot;, &apos;, &lt;, &gt;, &#64;, &#123;, &#124;, and &#125;.

If this rule is broken, a syntax check warning is produced.

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

The [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry") for [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") and for [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") in classes can be documented in the corresponding ABAP Doc commentary with a special syntax:

Documentation for

Syntax

Interface parameters

@parameter name|documentation

Class-based exception

@raising name|documentation

Classic exceptions

@exception name|documentation

If specified, @parameter, @raising, and @exception must be placed directly after "! and hence introduce a new line. The name (name) of an existing parameter or an exception must be specified after @parameter, @raising, @exception. This must be followed by the documentation (separated by |). This documentation is completed by the next @parameter, @raising, @exception or by the end of the ABAP Doc comment. In other words, no further documentation or interface documentation can be placed behind the interface documentation. Every interface parameter or every exception can only be specified once.

Note

The arrangement of the parameter interface documentation of procedures is not dependent on the order of the associated declarations. For reasons of readability, however, the order of the parameters and exceptions in the ABAP Doc comment should be the same as the order of the declarations.

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

The following tags are used in documentation texts for ABAP Doc comments, to format the documentation display in a development environment. These tags are a subset of the HTML tags.

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

An open tag must be closed before a new section of the ABAP Doc comment is started. A new section is introduced using @parameter, @raising or @exception.

The following attributes are possible:

-   In the <ol> tag, the attributes reversed, start, and type can be specified with their traditional HTML meaning.

-   In the <p> tag, the attributes class and lang can be specified. More information about the meaning of these attributes can be found under "Short Texts and Their Synchronization".

Example

Use of formatting in an ABAP Doc comment for a class. The [ABAP Development Tools](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") display the documentation with the appropriate formatting.

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

Parts of ABAP Doc comments can be flagged as short texts and the short texts of classes and function modules and their components can be synchronized with ABAP Doc comments. A part of an ABAP Doc comment can be flagged as a short text by being tagged as follows:

<p class="shorttext">...</p>

A paragraph tagged like this is displayed as a header in the display of the [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") documentation , instead of the short text shown in ABAP Workbench .

To synchronize the ABAP Doc short texts and the short texts saved as system documentation, the tag can be specified as follows (this is optional):

<p class="shorttext synchronized">...</p>

In this case, the length of the short text in ABAP Doc is restricted to the length of the matching short text in in the system documentation and is synchronized with the associated short text in the [original language](javascript:call_link\('abenoriginal_langu_guidl.htm'\) "Guideline") of the class or function module as follows:

-   When an ABAP Doc short text is created or modified in the source code, the associated short text of the repository object is used when the source code is saved. If the short text in ABAP Doc is empty, the short text of the repository object is deleted. If class="shorttext synchronized" is used to remove a full paragraph, the short text of the repository object is preserved. This synchronization works regardless of the tool used.

-   If a short text of a method or a function module is modified in the system documentation in which a paragraph with class="shorttext synchronized" occurs in ABAP Doc, the short text is replaced accordingly in the source text when saved. When a short text in the system documentation is deleted, an empty paragraph is produced. When a new short text is created in the system documentation for which there is not yet a short text in ABAP Doc, the paragraph is not currently created in the source code.

An ABAP Doc short text is part of the source code and is not translatable. This short text replaces the translatable short text of the repository object in its original language when synchronized, which means it must also be specified in the original language. This is an exception to the rule that ABAP Doc comments must always be in English. The original language can be flagged in the source by being specified as follows (this is optional):

<p class="shorttext" lang="...">...</p>

The attribute lang uses the HTML standard. It must be used to specify the original language of the repository object as a two-character ISO ID. If not, a syntax check warning occurs. This attribute makes it clear in the source code which language the short text should be specified in. It is also planned to be used in future extensions for the translatability of short texts.

Example

See the class CL\_DEMO\_ABAP\_DOC in a source code editor. It contains ABAP Doc comments for the class itself, for a type, for a method and its parameters, and for an attribute. The ABAP Doc comments include short texts that are synchronized with the short texts in the system documentation in the original language English. The class can be copied to a standalone temporary class to test the synchronization.

Documentation Links

In an ABAP Doc comment, the following syntax can be used to link to the documentation of other repository objects:

... {@link *\[**\[**\[*kind:*\]*name.*\]*...*\]**\[*kind:*\]*name} ...

In curly brackets after @link, a path is specified to a repository object and hence a link to its documentation. When the documentation is displayed in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"), a link is created here that displays the documentation of the repository object when selected (if this documentation exists).

-   name is used to specify the name of a repository object or a component of a repository object (this is not case-sensitive).

-   kind is used to specified the type of the repository object or a component of a repository object. kind must be specified as shown for the following repository objects:

-   DATA for constants, variables, and procedure parameters in the appropriate context

-   DOMA for [domains](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry")

-   EVNT for [events](javascript:call_link\('abenevent_glosry.htm'\) "Glossary Entry") in classes

-   FUNC for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in function groups

-   FORM for [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") in programs

-   FUGR for [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry")

-   INTF for [interfaces](javascript:call_link\('abeninterface_oo_glosry.htm'\) "Glossary Entry") implemented in a class to access its components.

-   METH for [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry")

-   PROG for [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry")

-   SEAM for [test seams](javascript:call_link\('abentest_seam_glosry.htm'\) "Glossary Entry")

-   XSLT for [XSLT programs](javascript:call_link\('abenxsl_transformation_2_glosry.htm'\) "Glossary Entry") and [simple transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry")

kind cannot and must not be specified for global data types and object types (classes and interfaces). These repository objects are only addressed using their names. This applies specifically to [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

-   The path is specified on one level only when repository objects are addressed. When a component of a repository is addressed, for example a method of a class or a local class of a program, the path is usually specified with multiple levels, with each segment separated by a period (.). The segments between the periods are allowed to be empty. This makes the path into a relative path and the next higher context of the current context is addressed.

Example

Documents a local class html of a program using ABAP Doc comments that contain links to the documentation of a global class and to the ABAP Doc documentation of the current program.

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

The following syntax can be used to define relations known as test relations in front of the declaration of a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") or a [test method](javascript:call_link\('abentest_method_glosry.htm'\) "Glossary Entry"):

"! @testing *\[*kind:*\]*name

This special ABAP Doc comment links the test class or test method with the repository object specified after @testing.

-   name is used to specify the name of a repository object (this is not case-sensitive).

-   Kind is used to specify the type of the repository object The following repository objects are possible and kind must be specified as shown:

-   FUNC for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") in function groups

-   FUGR for [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry")

-   XSLT for [XSLT programs](javascript:call_link\('abenxsl_transformation_2_glosry.htm'\) "Glossary Entry") and [simple transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry")

kind cannot and must not be specified for global classes and [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). They are only addressed using their names.

When a test class or test method is linked with a repository object, it means that the class or method can be displayed and executed for this object in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry").

Notes

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

Guidelines

Programming Guidelines

The following guidelines for general comments also specifically apply to ABAP Doc comments.

-   [Write program comments in English](javascript:call_link\('abenlangu_choice_guidl.htm'\) "Guideline")
    Adhering to this rule is particularly important, because documentation created in an ABAP Doc as part of the source code is not translated into other languages. One exception are synchronized short texts.
    
-   [Arrange comments correctly](javascript:call_link\('abenarrange_guidl.htm'\) "Guideline")
    This rule affects the horizontal indents because the vertical alignment is fixed in the syntax before declarations.
    
-   [Character set in source code](javascript:call_link\('abencharacter_set_guidl.htm'\) "Guideline")
    This rule is checked by the syntax check.


### abenpragma.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) → 

Pragmas

Pragmas are [program directives](javascript:call_link\('abenprogram_directive_glosry.htm'\) "Glossary Entry") that can be used to hide warnings from various check tools. The following are supported:

-   Warnings from the ABAP Compiler [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry")

-   Warnings from the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry")

More information can be found in the following:

-   [Syntax of Pragmas](#@@ITOC@@ABENPRAGMA_1)

-   [Positioning of Pragmas in ABAP Source Code](#@@ITOC@@ABENPRAGMA_2)

Syntax of Pragmas

A pragma is structured as follows:

##code\[par\]\[par\]...

It is not case-sensitive and does not contain blanks. The pragma code (code) defines its function and parameters (par) may further modify how it works.

A message is affected by a pragma if all the parameters specified match the concrete parameters. The concrete parameters can also be found in the long text of the message. Compulsory parameters are underlined in the long text and must not be omitted. Some parameters are optional. Optional parameters can be omitted by using an empty pair of square brackets \[\] in the appropriate position or by completely omitting an end part.

Notes

-   The existence of a pragma for a specific warning from the system check can be checked using the long text of the message (which in this case always exists). The description of a message for the extended program check is also specified by the pragma, which can be used to hide it.

-   Pragmas replace the previously common [pseudo comments](javascript:call_link\('abenpseudo_comment_slin.htm'\)) to hide warnings from the extended program check. Pseudo comments are now obsolete and should no longer be used. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.

-   Do not use statement [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\)) and the [pseudo comment](javascript:call_link\('abenpseudo_comment_slin.htm'\)) #EC \* in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated.

-   A pragma in a type definition made using [TYPES](javascript:call_link\('abaptypes.htm'\)) (for example, for hiding the warning about redundant secondary keys of table types) can also be applied to data declarations using [DATA](javascript:call_link\('abapdata.htm'\)) (in the case of non-generic types) and associated statements that reference the data type using [TYPE](javascript:call_link\('abapdata_referring.htm'\)). In the case of references to a generic data type defined using TYPES (that is a table type for which no primary table key is defined), a specified pragma is not applied to the data declaration. This is because the declaration uses a full table type implicitly and the pragma must potentially be specified again.

Example

One example of a pragma for syntax check warnings is:

##SHADOW

This pragma can be used to hide a syntax warning in a method definition that warns that a built-in function is obscured. The pragma has an optional parameter in which the name of the function can be specified as well.

##SHADOW\[SUBSTRING\]

A warning about "SUBSTRING" is suppressed using one of the following:

-   ##SHADOW

-   ##SHADOW\[SUBSTRING\]

-   ##SHADOW\[\]

but not using SHADOW\[FIND\].

Example

An example of pragmas for hiding warnings from the enhanced program check is provided below.

DATA TEXT TYPE STRING   ##needed.

text  = 'Hello Pragmas' ##no\_text.

Examples

In some executable examples for key accesses to internal tables ([read](javascript:call_link\('abenread_itab_using_key_abexa.htm'\)), [delete](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\))), syntax warnings are hidden by the relevant pragma. The pragmas were found in the long text of the syntax warnings.

Positioning of Pragmas in ABAP Source Code

A pragma applies to the current statement, that is to the statement that ends at the next "." or ",". Pragmas placed in front of the ":" of a chained statement apply to the entire chained statement. Pragmas that occur when calling a [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") apply to all statements of the macro.

Pragmas must only occur at certain positions in the source code for reasons of readability, namely:

-   At the start of a line, after any number of blanks

-   At the end of a line, at the most followed by ".", ",", or ":".

-   Not after ".", ",", or ":".
    Multiple pragmas may be entered one after another (separated by blanks) at permitted positions.

Unknown pragmas or pragmas with formal errors or pragmas in the wrong position or with incorrect parameters themselves produce syntax warnings. Pragmas in the wrong position for syntax check warnings are ignored.


### abenpseudo_comment.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) → 

Pseudo Comments

Pseudo comments are [program directives](javascript:call_link\('abenprogram_directive_glosry.htm'\) "Glossary Entry") that influence check and test procedures. Pseudo comments have mostly become [obsolete](javascript:call_link\('abenpseudo_comments_obsolete.htm'\)) and have been replaced by [pragma](javascript:call_link\('abenpragma.htm'\))s or real additions.

Non-Obsolete Pseudo Comments

-   [Pseudo Comments for Code Inspector](javascript:call_link\('abenpseudo_comment_ci.htm'\))

Obsolete Pseudo Comments

-   [Pseudo Comments for the Extended Program Check](javascript:call_link\('abenpseudo_comment_slin.htm'\))

-   [Pseudo Comments for Test Classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\))

Note

It is only possible to specify one pseudo comment for each program line. If multiple pseudo comments are required for a single statement, they must span multiple lines.

Continue
[Pseudo Comments for Code Inspector](javascript:call_link\('abenpseudo_comment_ci.htm'\))


### abenpseudo_comment_ci.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) →  [Pseudo Comments](javascript:call_link\('abenpseudo_comment.htm'\)) → 

Pseudo Comments for Code Inspector

The character string "#EC after a statement or a part of a statement followed by an ID with the prefix "CI\_" defines a [pseudo comment](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") for [Code Inspector](javascript:call_link\('abencode_inspector_glosry.htm'\) "Glossary Entry").

These pseudo comments can be used to hide certain warnings from Code Inspector for the statement in question. The possible IDs are documented in Code Inspector or in the output of its messages.

Notes

-   Until now, only the pseudo comments for Code Inspector have not been replaced by other language elements.

-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.

Example

The following [](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry")[join expression](javascript:call_link\('abenjoin_expression_glosry.htm'\) "Glossary Entry") bypasses [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry"), which raises a warning from Code Inspector. If the SELECT statement is part of an application that buffers selected data itself, however, the warning can be hidden as shown here. An additional normal comment is included to make it clear to the reader why the pseudo comment is being used.

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [Program Directives](javascript:call_link\('abenprogram_directives.htm'\)) → 

Pseudo Comments

Pseudo comments are [program directives](javascript:call_link\('abenprogram_directive_glosry.htm'\) "Glossary Entry") that influence check and test procedures. Pseudo comments have mostly become [obsolete](javascript:call_link\('abenpseudo_comments_obsolete.htm'\)) and have been replaced by [pragma](javascript:call_link\('abenpragma.htm'\))s or real additions.

Non-Obsolete Pseudo Comments

-   [Pseudo Comments for Code Inspector](javascript:call_link\('abenpseudo_comment_ci.htm'\))

Obsolete Pseudo Comments

-   [Pseudo Comments for the Extended Program Check](javascript:call_link\('abenpseudo_comment_slin.htm'\))

-   [Pseudo Comments for Test Classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\))

Note

It is only possible to specify one pseudo comment for each program line. If multiple pseudo comments are required for a single statement, they must span multiple lines.

Continue
[Pseudo Comments for Code Inspector](javascript:call_link\('abenpseudo_comment_ci.htm'\))
