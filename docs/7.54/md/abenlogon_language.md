  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlanguage_settings.htm) → 

Logon Language

The [logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry") is defined when a [user](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_glosry.htm "Glossary Entry") [logs on](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_glosry.htm "Glossary Entry") to an AS ABAP for the entire [user session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glosry.htm "Glossary Entry") and cannot then be changed. The current logon language can be determined using the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST.

The logon language influences the selection of the following texts:

-   Texts on general classic [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry")

-   Texts of [messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry")

-   Texts from [text pools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_pool_glosry.htm "Glossary Entry")

Note

The texts listed above are not affected by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_locale.htm). The statement [SET LANGUAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_language.htm) is used to change the language of the texts of a text pool.

Example

Reads the current logon language.

DATA(logon\_langu) = cl\_abap\_syst=>get\_logon\_language( ).