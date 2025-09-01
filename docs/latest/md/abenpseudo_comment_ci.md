---
title: "Pseudo Comments for Code Inspector"
description: |
  Syntax ... '#EC CI_... Effect The character string '#EC behind a statement or a part of a statement followed by an abbreviation with the prefix CI_ defines a pseudo comment(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_comment_glosry.htm 'Glossary Entry') for the Co
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_comment_ci.htm"
abapFile: "abenpseudo_comment_ci.htm"
keywords: ["select", "do", "if", "try", "data", "abenpseudo", "comment"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_directives.htm) →  [Pseudo Comments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_comment.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Pseudo%20Comments%20for%20Code%20Inspector%2C%20ABENPSEUDO_COMMENT_CI%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Pseudo Comments for Code Inspector

Syntax

... "#EC CI\_...

Effect

The character string "#EC behind a statement or a part of a statement followed by an abbreviation with the prefix CI\_ defines a [pseudo comment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for the [Code Inspector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencode_inspector_glosry.htm "Glossary Entry").

These pseudo comments can be used to hide certain warnings from the Code Inspector for the relevant statement. The possible abbreviations are documented with the Code Inspector or in the output of its messages.

Hints

-   Until now, only the pseudo comments for the Code Inspector have not been replaced by other language elements.
-   To hide multiple warnings from a statement with pseudo comments, the statement must be split into multiple lines.

Example

The following [join expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjoin_expression_glosry.htm "Glossary Entry") bypasses [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry"), which raises a warning from the Code Inspector. However, if the SELECT statement is part of an application that buffers selected data itself, the warning can be hidden as shown here. An additional regular comment illustrates to the user why the pseudo comment is being used.

SELECT d~object, h~dokldate, h~dokltime   "#EC CI\_BUFFJOIN
  FROM dokil AS d                         "Buffering is done
       INNER JOIN dokhl AS h              "by application
         ON h~id         = d~id     AND   "with Shared Objects
            h~object     = d~object AND
            h~typ        = d~typ    AND
            h~langu      = d~langu  AND
            h~dokversion = d~version
  WHERE d~id    ='SD'    AND
        d~typ   = 'E'    AND
        d~langu = @langu AND
        d~object LIKE 'AB%'
  INTO CORRESPONDING FIELDS OF TABLE docu\_tab.