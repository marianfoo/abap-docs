  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Syntax](javascript:call_link\('abensyntax_obsolete.htm'\)) →  [Obsolete Pseudo Comments](javascript:call_link\('abenpseudo_comments_obsolete.htm'\)) → 

Pseudo Comments for Test Classes

Obsolete Syntax

... "#AU Risk\_Level Critical*|*Dangerous*|*Harmless

... "#AU Duration Short*|*Medium*|*Long

Effect

The string "#AU in the statement [CLASS](javascript:call_link\('abapclass_definition.htm'\)) with the addition [FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\)) defines a [pseudo comment](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry") for defining a test property of a [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry").

Pseudo comments are case-sensitive. Any deviations from the syntax produce a warning when tests are performed.

Hints

-   Real additions are now available for the statement [CLASS ... FOR TESTING](javascript:call_link\('abapclass_for_testing.htm'\)) for defining test properties. These additions should be used instead of the pseudo comments. This makes pseudo comments for test classes obsolete. Existing pseudo comments are not ignored, but should no longer be used.
-   To specify both test attributes for a test class, the CLASS statement must be spread across at least two lines.