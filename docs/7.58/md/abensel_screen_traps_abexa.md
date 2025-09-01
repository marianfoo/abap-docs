  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Traps%20and%20Pitfalls%2C%20ABENSEL_SCREEN_TRAPS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

Selection Screens - Traps and Pitfalls

The example demonstrates some common traps and pitfalls of selection screens.

Source Code   

REPORT demo\_selscreen\_traps.
SELECTION-SCREEN COMMENT /1(50) text.
SELECTION-SCREEN ULINE.
PARAMETERS:
  lower    TYPE demo\_lower\_case,
  no\_lower TYPE demo\_no\_lower\_case,
  lowercas TYPE demo\_no\_lower\_case LOWER CASE.
SELECTION-SCREEN ULINE.
SELECT-OPTIONS selcrit FOR lower.
AT SELECTION-SCREEN OUTPUT.
  text = 'For the intended effect, do not change the input'.
  lower = 'x'.
  no\_lower = 'x'.
  lowercas = 'x'.
  selcrit\[\] = VALUE #( ( sign   = 'I'
                         option = 'BT'
                         low    = 'A'
                         high   = 'Bz' ) ).
START-OF-SELECTION.
  IF lower = 'x'.
    write / 'Lower case is respected for domain' &
            ' with lower case flag.'.
  ENDIF.
  IF no\_lower = 'X'.
    write / 'Lower case is not respected for domain' &
            ' without lower case flag.'.
  ENDIF.
  IF lowercas = 'x'.
    write / 'Lower case is respected for domain without' &
            ' lower case flag when overwritten with LOWER CASE.'.
  ENDIF.
  uline.
  IF 'Bar' IN selcrit.
    write / 'Latin characters (Bar) are found in interval.'.
  ENDIF.
  IF 'Bär' NOT IN selcrit.
    write / 'German umlaut (Bär) is not found in interval.'.
  ENDIF.

Description   

The first trap is common for all dynpros and especially also for selection screens. By default, the content of character-like input fields is converted to uppercase when transported to the respective ABAP fields of a program. This can lead to unexpected results. In order to transport lower case characters from input fields of selection screens, the default behavior can be changed either by using a [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") where the respective [semantic property](javascript:call_link\('abenddic_domains_sema.htm'\)) is set to lower case or with the addition LOWER CASE to PARAMETERS and SELECT-OPTIONS. The example shows three parameters for which the value x is entered:

-   Parameter lower is connected via data element DEMO\_LOWER\_CASE to DDIC domain DEMO\_LOWER\_CASE where the property lower case is set. The value x is passed to the ABAP field without conversion and the comparison with x is true.
-   Parameter no\_lower is connected via data element DEMO\_NO\_LOWER\_CASE to DDIC domain DEMO\_NO\_LOWER\_CASE where the property lower case is not set. The value x is passed to the ABAP field with conversion to uppercase and the comparison with X is true.
-   Parameter lowercas is also connected to DDIC domain DEMO\_NO\_LOWER\_CASE where the property lower case is not set. But the addition [LOWER CASE](abapparameters_value.htm#!ABAP_ADDITION_2@2@) suppresses the conversion to uppercase by setting the respective attribute for the dynpro field and the comparison with x is true.

The second trap is common for all [comparisons of character-like data](abencomparison_type.htm#@@ITOC@@ABENCOMPARISON_TYPE_2). Comparisons are based on the internal binary representation that depends on the code page. The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") or the current [text environment](javascript:call_link\('abentext_environment.htm'\)) are not taken into account. If this is not taken into account, when evaluating input from selection screens this can lead to unexpected results. The example shows a selection criterion selcrit that can deal with lower case letters but is restricted to the normal comparison rules. If an interval A,Bz is entered:

-   The string Bar is found in the interval using the operator [IN](javascript:call_link\('abenlogexp_select_option.htm'\)).
-   The string Bär is not found using the operator [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) because the internal representation of German umlaut ä is not part of the interval.