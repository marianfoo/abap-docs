# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Syntax

Included pages: 9


### abensyntax_obsolete.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Syntax%2C%20ABENSYNTAX_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Syntax

-   [Obsolete Statement Structuring](javascript:call_link\('abentokenization_obsolete.htm'\))
-   [Obsolete Operand Positions](javascript:call_link\('abenoperand_positions_obsolete.htm'\))
-   [Obsolete Pseudo Comments](javascript:call_link\('abenpseudo_comments_obsolete.htm'\))

Continue
[Obsolete Statement Structuring](javascript:call_link\('abentokenization_obsolete.htm'\))
[Obsolete Operand Positions](javascript:call_link\('abenoperand_positions_obsolete.htm'\))
[Obsolete Pseudo Comments](javascript:call_link\('abenpseudo_comments_obsolete.htm'\))


### abentokenization_obsolete.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Statement%20Structuring%2C%20ABENTOKENIZATION_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes:

-   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after [literals](javascript:call_link\('abenliteral.htm'\)) or [offset/length specifications](javascript:call_link\('abenoffset_length.htm'\)) can be omitted.
-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](javascript:call_link\('abenoffset_length.htm'\)). A single plus sign directly after a field name, a plus sign that is followed directly by a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as non-existent.


### abenoperand_positions_obsolete.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Operand%20Positions%2C%20ABENOPERAND_POSITIONS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Operand Positions

The following method of using operand positions is obsolete and should no longer be used:

-   [Enhanced Functional Operand Positions](javascript:call_link\('abenextended_functional_positions.htm'\))

Continue
[Extended Functional Operand Positions](javascript:call_link\('abenextended_functional_positions.htm'\))


### abenextended_functional_positions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) →  [Obsolete Operand Positions](javascript:call_link\('abenoperand_positions_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Extended%20Functional%20Operand%20Positions%2C%20ABENEXTENDED_FUNCTIONAL_POSITIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Extended Functional Operand Positions

Extended functional operand positions are [functional operand positions](javascript:call_link\('abenfunctional_positions.htm'\)) in which certain built-in functions can be specified alongside data objects, [functional method calls](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry"), [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), and [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), if a single data object is specified as their argument. The following extended functional operand positions exist:

-   Operand operand of the predicate expression
    
    [... operand IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))
    
-   Operands operand of the statement
    
    [WHEN operand ...](javascript:call_link\('abapwhen.htm'\))
    
    No [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") can be specified for operand, however.
    
-   Source field source of the obsolete statement
    
    [MOVE source TO ...](javascript:call_link\('abapmove_obs.htm'\))
    
    No [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") or [table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry"), however, can be specified for source.
    

The following built-in functions can be specified for IS *\[*NOT*\]* INITIAL, WHEN, and MOVE:

-   [General numeric functions](javascript:call_link\('abennumerical_functions.htm'\))
-   [Floating point functions](javascript:call_link\('abenfloating_point_functions.htm'\))
-   [Length functions for strings](javascript:call_link\('abenlength_functions.htm'\))
-   [Length functions for byte strings](javascript:call_link\('abendescriptive_functions_binary.htm'\))
-   [Row function for internal tables](javascript:call_link\('abendescriptive_functions_table.htm'\))

However, these functions can only be specified at extended functional operand positions if the argument is not an expression, a functional method, or a built-in function.

Hint

Extended functional operand positions exist for historical reasons and have been replaced by [operand positions for functions and expressions](javascript:call_link\('abenexpression_positions.htm'\)). In all appropriate places, operand positions in which functional methods or built-in functions could previously also be specified have been replaced by a suitable [operand position](javascript:call_link\('abenexpression_positions.htm'\)). In the remaining statements, IS *\[*NOT*\]* INITIAL, WHEN, and MOVE, this did not take place for the following reasons:

-   The operand position of the predicate expression IS *\[*NOT*\]* INITIAL is suitable as a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"), but not as a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). In particular, [calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") are not valid here.
-   WHEN is used to distinguish cases using [CASE](javascript:call_link\('abapcase.htm'\)). Generally, no operations should be performed after WHEN and constant values should be specified instead. The operand position after CASE, on the other hand, was changed to a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").
-   MOVE is obsolete and has been replaced by the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)). The right side of a statement with assignment operator is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

The extended functional operand position should not be used in the case of WHEN. The more general assignment operator \= should be used instead of MOVE.

Bad Example

Specifies the built-in function lines as the source of the obsolete statement [MOVE](javascript:call_link\('abapmove_obs.htm'\)).

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
DATA lines TYPE i.
...
MOVE lines( itab ) TO lines.

Good Example

Use of the general [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), which enables inline declarations on the left side.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
FINAL(lines) = lines( itab ).


### abenoperand_positions_obsolete.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Operand%20Positions%2C%20ABENOPERAND_POSITIONS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Operand Positions

The following method of using operand positions is obsolete and should no longer be used:

-   [Enhanced Functional Operand Positions](javascript:call_link\('abenextended_functional_positions.htm'\))

Continue
[Extended Functional Operand Positions](javascript:call_link\('abenextended_functional_positions.htm'\))


### abenpseudo_comments_obsolete.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Pseudo%20Comments%2C%20ABENPSEUDO_COMMENTS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Pseudo Comments

-   [Pseudo comments for extended program check](javascript:call_link\('abenpseudo_comment_slin.htm'\))
-   [Pseudo comments for test classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\))

Continue
[Pseudo Comments for the Extended Program Check](javascript:call_link\('abenpseudo_comment_slin.htm'\))
[Pseudo Comments for Test Classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\))


### abenpseudo_comment_slin.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) →  [Obsolete Pseudo Comments](javascript:call_link\('abenpseudo_comments_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Pseudo%20Comments%20for%20the%20Extended%20Program%20Check%2C%20ABENPSEUDO_COMMENT_SLIN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

Pseudo Comments for the Extended Program Check

Obsolete Syntax   

... "#EC ...

Effect

The string "#EC after a statement or a part of a statement that follows a particular ID defines the subsequent content of the line as a [pseudo comment](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") for the [extended program check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry").

The possible IDs are document in the extended program check or in the output of their results. The pseudo comments can be used to hide certain warnings from the extended program check for a particular statement.

Hints

-   When [pragmas](javascript:call_link\('abenpragma.htm'\)) were introduced, corresponding pragmas (##...) were introduced for all "#EC... pseudo comments. These pragmas should be used instead of the pseudo comments. This makes the pseudo comments obsolete for the extended program check. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.
-   The pseudo comment #EC \* must no longer be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the statement [SET EXTENDED CHECK](javascript:call_link\('abapset_extended_check.htm'\)).
-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.
-   If the ID specified after "#EC has the prefix CI\_, it is a [pseudo comment](javascript:call_link\('abenpseudo_comment_ci.htm'\)) for the Code Inspector. These pseudo comments have not yet been replaced by pragmas.

Example

The pseudo comment "#EC NEEDED suppresses the message from the extended program check that tells the user that there is no read access to a.

DATA: a TYPE string,   "#EC NEEDED
      b TYPE string.
a = b.

The following source code section shows how the pseudo comment can be replaced by a [pragma](javascript:call_link\('abenpragma.htm'\)).

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.


### abenpseudo_comment_test_class.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) →  [Obsolete Pseudo Comments](javascript:call_link\('abenpseudo_comments_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Pseudo%20Comments%20for%20Test%20Classes%2C%20ABENPSEUDO_COMMENT_TEST_CLASS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

Pseudo Comments for Test Classes

Obsolete Syntax   

... "#AU Risk\_Level Critical*|*Dangerous*|*Harmless

... "#AU Duration Short*|*Medium*|*Long

Effect

The string "#AU in the statement [CLASS](javascript:call_link\('abapclass_definition.htm'\)) with the addition [FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\)) defines a [pseudo comment](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") for defining a test property of a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry").

Pseudo comments are case-sensitive. Any deviations from the syntax produce a warning when tests are performed.

Hints

-   Real additions are now available for the statement [CLASS ... FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\)) for defining test properties. These additions should be used instead of the pseudo comments. This makes pseudo comments for test classes obsolete. Existing pseudo comments are not ignored, but should no longer be used.
-   To specify both test properties for a test class, the CLASS statement must be spread across at least two lines.


### abenpseudo_comments_obsolete.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Pseudo%20Comments%2C%20ABENPSEUDO_COMMENTS_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Pseudo Comments

-   [Pseudo comments for extended program check](javascript:call_link\('abenpseudo_comment_slin.htm'\))
-   [Pseudo comments for test classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\))

Continue
[Pseudo Comments for the Extended Program Check](javascript:call_link\('abenpseudo_comment_slin.htm'\))
[Pseudo Comments for Test Classes](javascript:call_link\('abenpseudo_comment_test_class.htm'\))
