---
title: "Pseudo Comments for Test Classes"
description: |
  Obsolete Syntax ... '#AU Risk_Level CriticalDangerousHarmless ... '#AU Duration ShortMediumLong Effect The string '#AU in the statement CLASS(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm) with the addition FOR TESTING(https://help.sap.com/doc/a
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_comment_test_class.htm"
abapFile: "abenpseudo_comment_test_class.htm"
keywords: ["do", "if", "case", "try", "class", "abenpseudo", "comment", "test"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensyntax_obsolete.htm) →  [Obsolete Pseudo Comments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_comments_obsolete.htm) → 

Pseudo Comments for Test Classes

Obsolete Syntax

... "#AU Risk\_Level Critical*|*Dangerous*|*Harmless

... "#AU Duration Short*|*Medium*|*Long

Effect

The string "#AU in the statement [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_definition.htm) with the addition [FOR TESTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_for_testing.htm) defines a [pseudo comment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for defining a test property of a [test class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_class_glosry.htm "Glossary Entry").

Pseudo comments are case-sensitive. Any deviations from the syntax produce a warning when tests are performed.

Notes

-   Real additions are now available for the statement [CLASS ... FOR TESTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_for_testing.htm) for defining test properties. These additions should be used instead of the pseudo comments. This makes pseudo comments for test classes obsolete. Existing pseudo comments are not ignored, but you should no longer use them.

-   To specify both test attributes for a test class, the CLASS statement must be spread across at least two lines.