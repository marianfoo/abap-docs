  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [Internationalization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternationalization_guidl.htm) → 

Text Environment

Background

The [text environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment_glosry.htm "Glossary Entry") is part of the runtime environment of an ABAP program and is made up of a text environment language, a locale, and a system code page. All programs in an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") have a common text environment.

By default, the text environment of an internal session is determined by the [logon language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogon_language_glosry.htm "Glossary Entry") and can be set programmatically by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_locale.htm). The current text environment language is contained in the system field sy-langu and is returned by the method GET\_LANGUAGE of the class CL\_ABAP\_SYST.

Rule

If possible, do not switch the text environment within the code

Set the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_locale.htm) in exceptional cases only, and reverse any text environment switches in good time.

Details

ABAP-coded services usually expect the text environment to be specified by the current user's logon language. The services are not designed to handle text environment switches of internal sessions within the coding.

If the text environment has to be switched for a specific service due to the following exceptions, this must be done only temporarily. This means that a switched text environment must be reset within the same program context to prevent unexpected behavior in other programs within the same internal session.

Exception

Switching the text environment within the code may be necessary in the following cases:

-   Sorting of texts not written in the logon language using [SORT ... AS TEXT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsort_itab.htm) or [CONVERT TEXT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_text.htm)

-   For accessing external files

Bad Example

The following source code shows a text environment switch within a method, where the text environment is not reset before exiting the method. This poses the danger of continuing within the wrong text environment after returning from the method.

METHOD ...
   SET LOCALE LANGUAGE ...
   ...
ENDMETHOD.

Good Example

The following source code shows a text environment switch within a method, where the text environment is reset to its original state before exiting the method.

METHOD ...
  DATA env\_lang TYPE tcp0c-langu.
  GET LOCALE LANGUAGE env\_lang.
  SET LOCALE LANGUAGE ...
  ...
  SET LOCALE LANGUAGE env\_lang.
ENDMETHOD.