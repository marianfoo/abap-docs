  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Robust ABAP](javascript:call_link\('abenrobust_abap_gdl.htm'\)) →  [Internationalization](javascript:call_link\('abeninternationalization_gdl.htm'\)) → 

Text Environment

Background

The [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") is part of the runtime framework of an ABAP program and is made up of a text environment language, a locale, and a system code page. All programs in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") have a common text environment.

By default, the text environment of an internal session is determined by the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") and can be set programmatically by the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). The current text environment language is contained in the system field sy-langu and is returned by the method GET\_LANGUAGE of the class CL\_ABAP\_SYST.

Rule

If possible, do not switch the text environment within the code

Set the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)) in exceptional cases only, and reverse any text environment switches in good time.

Details

ABAP-coded services usually expect the text environment to be specified by the current user's logon language. The services are not designed to handle text environment switches of internal sessions within the coding.

If the text environment has to be switched for a specific service due to the following exceptions, this must be done only temporarily. This means that a switched text environment must be reset within the same program context to prevent unexpected behavior in other programs within the same internal session.

Exception

Switching the text environment within the code may be necessary in the following cases:

-   Sorting of texts not written in the logon language using [SORT ... AS TEXT](javascript:call_link\('abapsort_itab.htm'\)) or [CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\))
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