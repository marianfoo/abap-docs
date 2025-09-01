  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAISE%20EXCEPTION%2C%20ABAPRAISE_EXCEPTION_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAISE EXCEPTION - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm)

Syntax

RAISE *\[*RESUMABLE*\]* EXCEPTION
  *{* *{* TYPE cx\_class *\[*MESSAGE tn(id)
                           *|* *{* ID mid TYPE mtype NUMBER num *}*
                             *\[*WITH dobj1 ... dobj4*\]**\]*
                    *\[*EXPORTING p1 = a1 p2 = a2 ...*\]* *}*
  *|* oref *}*.

Effect

Raises a class-based exception.

Additions   

-   RESUMABLE
    Raises a [resumable exception](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenresumable_exception_glosry.htm "Glossary Entry").
-   TYPE cx\_class *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*
    Specifies the exception class of the exception object.
-   [MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_message.htm)
    Passes the specification of a message to the exception object.
-   EXPORTING p1 = a1 p2 = a2 ...
    Passes actual parameters a1, a2, ... to the input parameters p1, p2, ... of the instance constructor of the exception object.
-   oref
    Uses an existing exception object, pointed to by oref.