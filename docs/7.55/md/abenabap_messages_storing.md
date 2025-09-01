  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Messages](javascript:call_link\('abenabap_messages.htm'\)) → 

Messages - Saving

[Messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry") are created in the message maintenance (transaction SE91).

The message short texts are saved as language-specific texts to the database table T100, which offers an interface to the translation tools. The following table shows the structure of the database table T100.

Component

Meaning

SPRSL

Single-character language key.

ARBGB

20-character (maximum) message class. The message class assigns messages to a specific area, such as an application area or a package.

MSGNR

Three-digit (maximum) message number. The range between 900 and 999 is reserved for customers.

TEXT

Short text with a maximum of 73 characters. An explanatory long text must be created when the short text is created if the message itself is not sufficiently explanatory.

The long texts associated with a message are managed as SAPscript documents in the document class NA.

Placeholders can be used in both short and long texts, which are replaced by the content of data objects using the statement [MESSAGE](javascript:call_link\('abapmessage.htm'\)) and the addition [WITH](javascript:call_link\('abapmessage.htm'\)). The placeholders in a short text can have the form "&i" or "&" and the placeholders in a long text can have the form "", where i is a digit between 1 and 4. If the actual character "&" is to be used literally, "&&" must be entered in the short text and "&" in the long text.

Hints

-   For reasons of downward compatibility, the character "$" is handled in the same way as "&" in short texts. The same is true for "$i". "$" should not be used as a placeholder. However, "$$" must be specified if "$" is to be used literally.

-   It is recommended that only one of the two forms "&i" or "&" is used as a placeholder in a short text. If a short text is to be translated into other languages, only the numbered placeholder "&i" can be used, since the structure of the sentence may change.

Example

The program DEMO\_MESSAGE\_TEXTS uses the class CL\_DEMO\_MESSAGE\_TEXTS to read the short text and long text of a message.