# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Syntax

Included pages: 9


### abensyntax_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) → 

Obsolete Syntax

-   [Obsolete Statement Structuring](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentokenization_obsolete.htm)
-   [Obsolete Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperand_positions_obsolete.htm)
-   [Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comments_obsolete.htm)

Continue
[Obsolete Statement Structuring](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentokenization_obsolete.htm)
[Obsolete Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperand_positions_obsolete.htm)
[Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comments_obsolete.htm)


### abentokenization_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) → 

Obsolete Statement Structuring

The following syntax forms are obsolete. They are forbidden within ABAP Objects and produce syntax check warnings outside of classes:

-   Outside of classes, separators (blanks, commas, colons periods, or the end of a line) after [literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenliteral.htm) or [offset/length specifications](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length.htm) can be omitted.
-   Outside of classes, the operators for offset and length can be omitted in [offset/length specifications](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length.htm). A single plus sign directly after a field name, a plus sign that is followed directly by a parenthetical expression, or an empty parenthetical expression after a plus sign, an offset value, or a field name, are interpreted as non-existent.


### abenoperand_positions_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) → 

Obsolete Operand Positions

The following method of using operand positions is obsolete and should no longer be used:

-   [Enhanced Functional Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_functional_positions.htm)

Continue
[Extended Functional Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_functional_positions.htm)


### abenextended_functional_positions.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) →  [Obsolete Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoperand_positions_obsolete.htm) → 

Extended Functional Operand Positions

Extended functional operand positions are [functional operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_positions.htm) in which certain built-in functions can be specified alongside data objects, [functional method calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry"), [constructor expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry"), and [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry"), if a single data object is specified as their argument. The following extended functional operand positions exist:

-   Operand operand of the predicate expression
    
    [... operand IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_initial.htm)
    
-   Operands operand of the statement
    
    [WHEN operand ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhen.htm)
    
    No [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry") can be specified for operand, however.
    
-   Source field source of the obsolete statement
    
    [MOVE source TO ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove_obs.htm)
    
    No [constructor expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") or [table expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_expression_glosry.htm "Glossary Entry"), however, can be specified for source.
    

The following built-in functions can be specified for IS *\[*NOT*\]* INITIAL, WHEN, and MOVE:

-   [General numeric functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumerical_functions.htm)
-   [Floating point functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfloating_point_functions.htm)
-   [Length functions for strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlength_functions.htm)
-   [Length functions for byte strings](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescriptive_functions_binary.htm)
-   [Row function for internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescriptive_functions_table.htm)

However, these functions can only be specified at extended functional operand positions if the argument is not an expression, a functional method, or a built-in function.

Hint

Extended functional operand positions exist for historical reasons and have been replaced by [operand positions for functions and expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions.htm). In all appropriate places, operand positions in which functional methods or built-in functions could previously also be specified have been replaced by a suitable [operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexpression_positions.htm). In the remaining statements, IS *\[*NOT*\]* INITIAL, WHEN, and MOVE, this did not take place for the following reasons:

-   The operand position of the predicate expression IS *\[*NOT*\]* INITIAL is suitable as a [functional operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry"), but not as a [general expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). In particular, [calculation expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencalculation_expression_glosry.htm "Glossary Entry") are not valid here.
-   WHEN is used to distinguish cases using [CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcase.htm). Generally, no operations should be performed after WHEN and constant values should be specified instead. The operand position after CASE, on the other hand, was changed to a [general expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").
-   MOVE is obsolete and has been replaced by the [assignment operator \=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm). The right side of a statement with assignment operator is a [general expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

The extended functional operand position should not be used in the case of WHEN. The more general assignment operator \= should be used instead of MOVE.

Bad Example

Specifies the built-in function lines as the source of the obsolete statement [MOVE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove_obs.htm).

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
DATA lines TYPE i.
...
MOVE lines( itab ) TO lines.

Good Example

Use of the general [assignment operator \=](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenequals_operator.htm), which enables inline declarations on the left side.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
...
DATA(lines) = lines( itab ).


### abenoperand_positions_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) → 

Obsolete Operand Positions

The following method of using operand positions is obsolete and should no longer be used:

-   [Enhanced Functional Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_functional_positions.htm)

Continue
[Extended Functional Operand Positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_functional_positions.htm)


### abenpseudo_comments_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) → 

Obsolete Pseudo Comments

-   [Pseudo comments for extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_slin.htm)
-   [Pseudo comments for test classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_test_class.htm)

Continue
[Pseudo Comments for the Extended Program Check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_slin.htm)
[Pseudo Comments for Test Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_test_class.htm)


### abenpseudo_comment_slin.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) →  [Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comments_obsolete.htm) → 

Pseudo Comments for the Extended Program Check

Obsolete Syntax

... "#EC ...

Effect

The string "#EC after a statement or a part of a statement that follows a particular ID defines the subsequent content of the line as a [pseudo comment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry").

The possible IDs are document in the extended program check or in the output of their results. The pseudo comments can be used to hide certain warnings from the extended program check for a particular statement.

Hints

-   When [pragmas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpragma.htm) were introduced, corresponding pragmas (##...) were introduced for all "#EC... pseudo comments. These pragmas should be used instead of the pseudo comments. This makes the pseudo comments obsolete for the extended program check. The program ABAP\_SLIN\_PRAGMAS shows which pragmas are to be used instead of the obsolete pseudo comments.
-   The pseudo comment #EC \* must no longer be used in programs that use pragmas to deactivate warnings. This causes an extended program check warning that cannot be deactivated. The same applies to the statement [SET EXTENDED CHECK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_extended_check.htm).
-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.
-   If the ID specified after "#EC has the prefix "CI\_", it is a [pseudo comment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_ci.htm) for the Code Inspector. These pseudo comments have not yet been replaced by pragmas.

Example

The pseudo comment "#EC NEEDED suppresses the message from the extended program check that tells the user that there is no read access to a.

DATA: a TYPE string,   "#EC NEEDED
      b TYPE string.
a = b.

The following source code section shows how the pseudo comment can be replaced by a [pragma](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpragma.htm).

DATA: a TYPE string ##needed,
      b TYPE string.
a = b.


### abenpseudo_comment_test_class.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) →  [Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comments_obsolete.htm) → 

Pseudo Comments for Test Classes

Obsolete Syntax

... "#AU Risk\_Level Critical*|*Dangerous*|*Harmless

... "#AU Duration Short*|*Medium*|*Long

Effect

The string "#AU in the statement [CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) with the addition [FOR TESTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_testing.htm) defines a [pseudo comment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for defining a test property of a [test class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_class_glosry.htm "Glossary Entry").

Pseudo comments are case-sensitive. Any deviations from the syntax produce a warning when tests are performed.

Hints

-   Real additions are now available for the statement [CLASS ... FOR TESTING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_testing.htm) for defining test properties. These additions should be used instead of the pseudo comments. This makes pseudo comments for test classes obsolete. Existing pseudo comments are not ignored, but should no longer be used.
-   To specify both test attributes for a test class, the CLASS statement must be spread across at least two lines.


### abenpseudo_comments_obsolete.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_obsolete.htm) → 

Obsolete Pseudo Comments

-   [Pseudo comments for extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_slin.htm)
-   [Pseudo comments for test classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_test_class.htm)

Continue
[Pseudo Comments for the Extended Program Check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_slin.htm)
[Pseudo Comments for Test Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpseudo_comment_test_class.htm)
