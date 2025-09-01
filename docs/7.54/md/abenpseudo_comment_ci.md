---
title: "Pseudo Comments for Code Inspector"
description: |
  The character string '#EC after a statement or a part of a statement followed by an ID with the prefix 'CI_' defines a pseudo comment(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_comment_glosry.htm 'Glossary Entry') for Code Inspector(https://help.sap.com/doc/abapdocu_7
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_comment_ci.htm"
abapFile: "abenpseudo_comment_ci.htm"
keywords: ["select", "do", "if", "try", "data", "abenpseudo", "comment"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP Syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_directives.htm) →  [Pseudo Comments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_comment.htm) → 

Pseudo Comments for Code Inspector

The character string "#EC after a statement or a part of a statement followed by an ID with the prefix "CI\_" defines a [pseudo comment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for [Code Inspector](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencode_inspector_glosry.htm "Glossary Entry").

These pseudo comments can be used to hide certain warnings from Code Inspector for the statement in question. The possible IDs are documented in Code Inspector or in the output of its messages.

Notes

-   Until now, only the pseudo comments for Code Inspector have not been replaced by other language elements.

-   To hide multiple warnings from a statement with pseudo comments, the statement must be spread across multiple lines.

Example

The following [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry")[join expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjoin_expression_glosry.htm "Glossary Entry") bypasses [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry"), which raises a warning from Code Inspector. If the SELECT statement is part of an application that buffers selected data itself, however, the warning can be hidden as shown here. An additional normal comment is included to make it clear to the reader why the pseudo comment is being used.

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