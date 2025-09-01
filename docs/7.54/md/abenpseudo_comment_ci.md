  

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