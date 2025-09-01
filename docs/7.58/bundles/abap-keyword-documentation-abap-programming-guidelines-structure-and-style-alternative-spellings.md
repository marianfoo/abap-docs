# ABAP - Keyword Documentation / ABAP - Programming Guidelines / Structure and Style / Alternative Spellings

Included pages: 6


### abenalternative_spelling_gdl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Alternative%20Spellings%2C%20ABENALTERNATIVE_SPELLING_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Alternative Spellings

Some ABAP statements can be written with different spellings, but interpreted by the compiler in the same way. To make programming easier to understand, however, spellings should be kept the same, with alternative spelling used only in special situations.

-   [Alternative Language Constructs](javascript:call_link\('abenalternative_langu_guidl.htm'\) "Guideline")
-   [Chained Statements](javascript:call_link\('abenchained_statements_guidl.htm'\) "Guideline")
-   [Method Calls](javascript:call_link\('abenmethod_call_guidl.htm'\) "Guideline")
-   [Assignments](javascript:call_link\('abenassign_calc_guidl.htm'\) "Guideline")
-   [Calculations](javascript:call_link\('abencalc_expresssion_guidl.htm'\) "Guideline")

Continue
[Alternative Language Constructs](javascript:call_link\('abenalternative_langu_guidl.htm'\))
[Chained Statements](javascript:call_link\('abenchained_statements_guidl.htm'\))
[Method Calls](javascript:call_link\('abenmethod_call_guidl.htm'\))
[Assignments](javascript:call_link\('abenassign_calc_guidl.htm'\))
[Calculations](javascript:call_link\('abencalc_expresssion_guidl.htm'\))


### abenalternative_langu_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Alternative Spellings](javascript:call_link\('abenalternative_spelling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Alternative%20Language%20Constructs%2C%20ABENALTERNATIVE_LANGU_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Alternative Language Constructs

Background   

Alternative language constructs are parts of statements that can be written in different ways. One reason for this are the constant new developments in the language. Often, new spellings are introduced and the old spellings retained for reasons of downward-compatibility.

Rule   

Use consistent spelling

If there is more than one spelling for a statement, choose one of these spellings and use it consistently throughout your development work. It is best to choose the spelling that most accurately reflects the semantics of the statement.

Details   

To make your programming easier to understand, always choose the spelling that is most accurate and easiest to read, and which (where applicable) matches the spelling used in other statements. The following list contains some examples:

-   If you can choose from a range of comparison operators (\= or EQ, \> or GT, < or LT, \>= or GE, <= or LE) we recommend that you pick a type of operator and stick to it within the context of a program. The variant with the characters =, <, and > is seen as more modern, but also overloads these characters. The comparison operators that consist of two letters are better matched to other comparison operators such as CO, CN, and so on, which have no alternative forms.
-   The addition NOT of the [comparison operators](javascript:call_link\('abenrel_operator_glosry.htm'\) "Glossary Entry") BETWEEN, IN, IS ASSIGNED, IS BOUND, IS INSTANCE OF, IS INITIAL, and IS SUPPLIED is a better option than the identical Boolean operator NOT, for improved readability. For example, the expression a IS NOT INITIAL is easier than the logically identical expression NOT a IS INITIAL. This corresponds to the definition of comparison expressions, where a <> b is more intuitive than NOT a = b.
-   The addition LENGTH len of the declarative statements DATA and TYPES is preferable to the length specified in parentheses (len). This then matches the spelling used in CREATE DATA ... LENGTH. In addition to this, it is easy to mistake the parenthesized form for [dynamic tokens](javascript:call_link\('abendynamic_prog_technique_gdl.htm'\)). Only dynamic tokens should use this form.
-   The optional addition SUBSTRING of the statements FIND and REPLACE can be used to make a clearer distinction from the alternative addition PCRE*|*REGEX.
-   In ABAP SQL, comma-separated lists are preferable to lists without commas. Using commas as separators is the prerequisite for using expressions in lists. [Host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry") should always be indicated by the escape character @.
-   Within the parameter list of the statements EXPORT and IMPORT, use the equal sign (=) instead of the additions FROM or TO. The spelling then matches the spelling used in parameter lists in other calls, such as methods, functions modules, and transformations.
-   Always use the semantically identical addition ACTUAL LENGTH instead of the addition LENGTH of the statement READ DATASET. This makes the distinction from the similar addition MAXIMUM LENGTH clearer. The last two examples are typical of the way new additions are added to the language, while retaining the old spelling as a kind of short form for reasons of downward compatibility.

Bad Example

The following piece of source code shows how the statement FIND is used inconsistently within a program. The first and third FIND statements are alternative spellings with the same meaning.

DATA text TYPE string.
...
FIND '...' IN text.
...
FIND PCRE '...' IN text.
...
FIND SUBSTRING '...' IN text.
...

Good Example

The following piece of source code shows the same statements as in the example above, but with consistent spelling. This expresses the semantic distinction between searching for a substring and searching for a regular expression in clear syntax.

DATA text TYPE string.
...
FIND SUBSTRING '...' IN text.
...
FIND PCRE '...' IN text.
...
FIND SUBSTRING '...' IN text.
...


### abenchained_statements_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Alternative Spellings](javascript:call_link\('abenalternative_spelling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Chained%20Statements%2C%20ABENCHAINED_STATEMENTS_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Chained Statements

Background   

Successive ABAP statements that have the same starting part can be expressed in a chained statement. A chained statement consists of the identical starting part that is specified once and that is concluded by a colon (:). Behind this colon, the remaining parts are separated by commas (,). Only the last part is concluded with a period (.). During the syntax check and the compilation, a chained statement is handled like the respective sequence of individual ABAP statements, where the shared starting part is put in front of each remaining part. The identical starting parts are not restricted to the keyword.

Rule   

Only use chained statements where appropriate

Use chained statements mainly for declarations. They should always be used for related declarations of type TYPES BEGIN OF ... TYPES END OF ....

Details   

The main motivation for using chained statements is to increase the readability of programs. Using chained statements correctly in declarations achieves this goal. In other statements, chained statements can actually decrease the readability or, in the worst case, result in incorrect program behavior. When using chained statements, only [one statement at most should be specified per program line](javascript:call_link\('abenstatement_guidl.htm'\) "Guideline"). Never span [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") or functional calls across multiple parts of chained statements.

Declarations

In complex declarations, chained statements can be used to improve readability. (However, if local declarations are too complex, this suggests an [insufficient separation of tasks](javascript:call_link\('abenproc_volume_guidl.htm'\) "Guideline"), and should not occur.) In particular, multiple chained statements can be used to group related declarations:

DATA:
   airplane            TYPE REF TO cl\_airplane,
   airplane\_attributes TYPE cl\_airplane=>airplane\_attributes.
DATA:
   airport            TYPE REF TO cl\_airport,
   airport\_attributes TYPE cl\_airport=>airport\_attributes.
...

The grouping of declarative statements that semantically represent a composite statement is even more important. For example, the declaration of structured types and data objects in ABAP is done using individual statements, whose close relationship should be expressed by a chained statement:

TYPES:
   BEGIN OF file,
     name TYPE string,
     owner TYPE sy-uname,
     creation\_date TYPE timestamp,
   END OF file.

For structures that copy components of another structure using the statements INCLUDE TYPE or INCLUDE STRUCTURE, this procedure cannot be used consistently because the beginning of the statement is different and therefore the chained statement must be interrupted. In any case, we [no longer recommend](javascript:call_link\('abenincluding_structures_guidl.htm'\) "Guideline") using the statement INCLUDE.

Operational Statements

For operational statements, however, chained statements are not recommended because they do not usually result in better readability. Example:

CALL METHOD meth EXPORTING para = : '1', '2', '3'.

Here, the exploitation of the fact that the same starting parts in front of the colon are not limited to the keyword was a little overdone. The following chained statement would be easier to read:

CALL METHOD:
meth EXPORTING para = '1',
meth EXPORTING para = '2',
meth EXPORTING para = '3'.

However, in this case the best [notation](javascript:call_link\('abenmethod_call_guidl.htm'\) "Guideline") can manage without a chained statement anyway:

meth( '1' ).
meth( '2' ).
meth( '3' ).

Unexpected Behavior

If chained statements are not understood correctly, this can easily produce statements with correct syntax but unexpected behavior. Prominent examples are initiating statements within control structures. Here, the use of chained statements does not usually lead to the intended result.

Let us look at the following TRY control structure, in which the CATCH statements are implemented using a chained statement:

TRY.
     ...
  CATCH: cx\_1, cx\_2, cx\_3.
     "exception handling
      ...
ENDTRY.

A reader and probably even a developer would assume that this is a CATCH block that handles three exceptions. In fact, the complete syntax is as follows:

TRY.
     ...
  CATCH cx\_1.
  CATCH cx\_2.
  CATCH cx\_3.
    "exception handling
     ...
ENDTRY.

The cx\_1 and cx\_2 exceptions are indeed caught, but the corresponding CATCH blocks are empty. Only the third exception cx\_3 has a CATCH block that is not empty. The syntax that the developer presumably intended is as follows:

TRY.
    ...
  CATCH cx\_1 cx\_2 cx\_3.
    "exception handling
    ...
ENDTRY.

For the WHEN blocks within a CASE control structure, the following applies:

WHEN: a, b, c.

is not equivalent to the more probable

WHEN a OR b OR c.

The [extended program check](javascript:call_link\('abenextended_program_check_guidl.htm'\) "Guideline") warns of empty statement blocks after CATCH and WHEN. In this way, the extended program check can be used to uncover where chained statements have been misused within TRY and CASE control structures.

Another example in which the use of chained statements can cause problems are ABAP SQL statements. Here are two examples:

-   The following chained statement consists of two SELECT statements that both supply a work area with values, and of which only the second one has a WHERE condition.
    
    SELECT SINGLE carrid, connid
           FROM spfli
           WHERE @carrid = '...'
           INTO: @carrid\_wa, @connid\_wa.
    

The following INTO clause was undoubtedly meant here:

INTO (@carrid\_wa, @connid\_wa).

-   In the following example, the seemingly single statement does not update the discount and the telephone number of the customer with the customer ID 00017777. Instead, these are in fact two statements, of which the first changes the discount for all customers and the second changes the telephone number of the customer with the customer ID 00017777.
    
    UPDATE scustom SET: discount = '003',
                        telephone = '0621/444444'
                   WHERE id = '00017777'.
    

Even if the previous examples of the chained statements would show the semantic that is expected by the developer, such use is not recommended in any case because each reader would probably expect a different program behavior, and the readability and maintainability of the source code would be impaired considerably.

Expressions and Function Calls

Unfortunately, ABAP statements can be spanned across the colon in chained statements, even within expressions or function calls. The following example with correct syntax shows what can happen here, even in the simplest of cases. This example cannot be understood and nor does it produce the expected result.

DATA: itab TYPE TABLE OF i,
      num  TYPE i.
itab = VALUE #(: ( 1 ) ), ( 2 ) ), ( 3 ) ), ( 4 ) ).
num  = itab\[: 1 \], 2 \], 3 \], 4 \].
cl\_demo\_output=>new(
  )->write\_data(: \`Text1\` ), \`Text2\` ), num
  )->display( ).


### abenmethod_call_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Alternative Spellings](javascript:call_link\('abenalternative_spelling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Method%20Calls%2C%20ABENMETHOD_CALL_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Method Calls

Background   

Static calls of methods can be formulated in two different ways. The [obsolete long form](javascript:call_link\('abapcall_method_static.htm'\))

CALL METHOD meth EXPORTING ...

is based on the notation of the function module call. Alternatively, a [short form](javascript:call_link\('abapcall_method_static_short.htm'\)) can be used:

meth( ... ).

This form uses a parenthesis notation instead of the initiating ABAP words [CALL METHOD](javascript:call_link\('abapcall_method_static.htm'\)). A combination of CALL METHOD and parentheses is also possible.

Rule   

Formulate static method calls without CALL METHOD

Use the long form of the method call using CALL METHOD only for dynamic method calls.

Details   

The short form of the static method call is clearer. The redundant ABAP words CALL METHOD provide no additional information to the reader. Using the short form, self-contained method calls have the same appearance as functional method calls on operand positions. For dynamic method calls, the long form with CALL METHOD is required by the syntax. If it is only used there, the different notations provide the reader with another distinguishing feature between the static and dynamic method call.

Bad Example

The following source code shows the long form of a static method call using CALL METHOD, which is no longer recommended.

...
CALL METHOD cl\_class=>do\_something
  EXPORTING
    some\_input = value1
  IMPORTING
    some\_output = value2
  CHANGING
    some\_change = value3.
...

The following source code shows the same static method call as above, but with parentheses inserted. In this form, which also has correct syntax, either CALL METHOD or the parentheses are superfluous.

...
CALL METHOD cl\_class=>do\_something(
  EXPORTING
    some\_input = value1
  IMPORTING
    some\_output = value2
  CHANGING
    some\_change = value3 ).
...

Good Example

The following source code shows the same method call as above, but as recommended, without CALL METHOD. If a method has only importing parameters, IMPORTING and CHANGING can be omitted, and also the EXPORTING addition. If it is a single importing parameter, its name can also be omitted.

...
cl\_class=>do\_something(
  EXPORTING
    some\_input = value1
  IMPORTING
    some\_output = value2
  CHANGING
    some\_change = value3 ).
...


### abenassign_calc_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Alternative Spellings](javascript:call_link\('abenalternative_spelling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Assignments%2C%20ABENASSIGN_CALC_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Assignments

Background   

For explicit assignments in which the value of a source is assigned to a target, ABAP contains the general assignment operator [\=](javascript:call_link\('abenequals_operator.htm'\)) and the special casting operator [?=](javascript:call_link\('abapmove_cast.htm'\)). Statements with these operators

lhs =*|*?= rhs.

enable assignments of

-   data objects,
-   return values or results of functional methods, built-in functions or construction expressions, table expressions and
-   results of calculation expressions (arithmetic expressions, bit expressions, and string expressions)

to be made to variables that can also be declared inline and to [writable expressions](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry").

Alongside the assignment operators, two obsolete statements exist for historical reasons that can also perform assignments:

-   The statement
    
    [MOVE source TO*|*?TO destination.](javascript:call_link\('abapmove_obs.htm'\))
    
    assigns a source source to a target destination. It covers some of the operators performed by the assignment operators [\=](javascript:call_link\('abenequals_operator.htm'\)) and [?=](javascript:call_link\('abapmove_cast.htm'\)).
    
-   The statement
    
    [COMPUTE lhs =*|*?= rhs.](javascript:call_link\('abapcompute.htm'\))
    
    has the same semantics as lhs =*|*?= rhs. The keyword COMPUTE can be written in front of each assignment with the assignment operators [\=](javascript:call_link\('abenequals_operator.htm'\)) and [?=](javascript:call_link\('abapmove_cast.htm'\)) where the left side is not an inline declaration, but is ignored.
    

Rule   

Assignments with the assignment operators \= and ?= only

Use the assignment operators instead of the statement MOVE. Do not use the keyword COMPUTE in front of assignments.

Details   

Assignments with the assignment operators [\=](javascript:call_link\('abenequals_operator.htm'\)) and [?=](javascript:call_link\('abapmove_cast.htm'\)) implement the most global concept. The right side is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and the left side is a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry") (except in downcasts).

The statements MOVE and COMPUTE have the following drawbacks:

-   The statement MOVE cannot be used globally. The only sources allowed are data objects, function methods, and certain built-in functions whose arguments must be single data objects. The only targets allowed are variables; inline declarations are not possible. Any future enhancements to operand positions will not be applied to MOVE.
-   The keyword COMPUTE is both confusing and surplus to requirements. If an arithmetic expression or other calculation expression is on the right side, the keyword COMPUTE has the correct meaning, but is redundant. If a data object, a function method, a built-in function, or a constructor expression is on the right side, the keyword COMPUTE has the wrong meaning, since a return value is assigned instead of an expression being calculated.

The statements MOVE and COMPUTE were created at a time when assignments were only made between individual data objects and calculations were exclusively arithmetic. Neither of these statements is appropriate in a modern, expression-oriented ABAP program that exploits all options on the left and right sides of an assignments.

Hint

The optional addition EXACT of the statements [MOVE](javascript:call_link\('abapmove_obs.htm'\)) and [COMPUTE](javascript:call_link\('abapcompute.htm'\)), which produces lossless assignments and lossless calculations, has been replaced in full by the lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)).

Bad Example

The following source code shows a simple assignment using MOVE and the assignment of an arithmetic expression after COMPUTE.

DATA text1 TYPE string.
DATA text2 TYPE string.
...
MOVE text1 TO text2.
DATA result TYPE decfloat34.
DATA number1 TYPE i.
DATA number2 TYPE i.
...
COMPUTE result = number1 \* number2.

Good Example

The following source code shows the same example as above but without specifying the keywords MOVE and COMPUTE. This makes inline declarations possible on the left side.

DATA text1 TYPE string.
...
DATA(text2) = text1.
DATA number1 TYPE i.
DATA number2 TYPE i.
...
FINAL(result) = CONV decfloat34( number1 \* number2 ).


### abencalc_expresssion_guidl.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Alternative Spellings](javascript:call_link\('abenalternative_spelling_gdl.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Calculations%2C%20ABENCALC_EXPRESSSION_GUIDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Calculations

Background   

In ABAP, the [arithmetic operators](javascript:call_link\('abenarithmetic_operator_glosry.htm'\) "Glossary Entry") in [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") are used for numeric calculations. [Calculation assignments](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operators [+=](javascript:call_link\('abencalculation_assignments.htm'\)), [\-=](javascript:call_link\('abencalculation_assignments.htm'\)), [\*=](javascript:call_link\('abencalculation_assignments.htm'\)), and [/=](javascript:call_link\('abencalculation_assignments.htm'\)) are available for the basic arithmetic operations. These operator formats are accompanied by the dedicated ABAP keywords ADD, SUBTRACT, MULTIPLY, and DIVIDE.

Rule   

Use the operator format

For calculations, use the operator format with the operators (+=, \-=, \*=, or /=) instead of the ABAP keyword format.

Details   

Calculations with the statements ADD, SUBTRACT, MULTIPLY, and DIVIDE do not allow expressions in the operand positions and are often more difficult to read than the corresponding operator format.

Bad Example

The following source code shows a multiplication using the statement MULTIPLY.

MULTIPLY n1 by n2.

Good Example

The following source code shows the same example as above, but in the more compact operator format.

n1 \*=  n2.
