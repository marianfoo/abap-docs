---
title: "Pseudo Comments for Test Classes"
description: |
  Obsolete Syntax ... '#AU Risk_Level CriticalDangerousHarmless ... '#AU Duration ShortMediumLong Effect The string '#AU in the statement CLASS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) with the addition FOR TESTING(https://help.sap.com/doc/a
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_comment_test_class.htm"
abapFile: "abenpseudo_comment_test_class.htm"
keywords: ["do", "if", "case", "try", "class", "abenpseudo", "comment", "test"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensyntax_obsolete.htm) →  [Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_comments_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Pseudo Comments for Test Classes, ABENPSEUDO_COMMENT_TEST_CLASS, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Pseudo Comments for Test Classes

Obsolete Syntax   

... "#AU Risk\_Level Critical*|*Dangerous*|*Harmless

... "#AU Duration Short*|*Medium*|*Long

Effect

The string "#AU in the statement [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) with the addition [FOR TESTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_for_testing.htm) defines a [pseudo comment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for defining a test property of a [test class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentest_class_glosry.htm "Glossary Entry").

Pseudo comments are case-sensitive. Any deviations from the syntax produce a warning when tests are performed.

Hints

-   Real additions are now available for the statement [CLASS ... FOR TESTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_for_testing.htm) for defining test properties. These additions should be used instead of the pseudo comments. This makes pseudo comments for test classes obsolete. Existing pseudo comments are not ignored, but should no longer be used.
-   To specify both test properties for a test class, the CLASS statement must be spread across at least two lines.