  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Syntax Elements of an ABAP Program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_syntax.htm) →  [Program Directives](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_directives.htm) →  [Pseudo Comments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_comment.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Pseudo Comments for Code Inspector, ABENPSEUDO_COMMENT_CI, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Pseudo Comments for Code Inspector

Syntax

... "#EC CI\_...

Effect

The character string "#EC behind a statement or a part of a statement followed by an abbreviation with the prefix CI\_ defines a [pseudo comment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_comment_glosry.htm "Glossary Entry") for the [Code Inspector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencode_inspector_glosry.htm "Glossary Entry").

These pseudo comments can be used to hide certain warnings from the Code Inspector for the relevant statement. The possible abbreviations are documented with the Code Inspector or in the output of its messages.

Hints

-   Until now, only the pseudo comments for the Code Inspector have not been replaced by other language elements.
-   To hide multiple warnings from a statement with pseudo comments, the statement must be split into multiple lines.

Example

The following [join expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjoin_expression_glosry.htm "Glossary Entry") bypasses [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry"), which raises a warning from the Code Inspector. However, if the SELECT statement is part of an application that buffers selected data itself, the warning can be hidden as shown here. An additional regular comment illustrates to the user why the pseudo comment is being used.

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