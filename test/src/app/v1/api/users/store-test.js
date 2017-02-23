import { assert } from 'chai'
import _ from 'lodash'
import rewire from 'rewire'
import sinon from 'sinon'
// import store from '../../../../../../src/app/v1/api/plans/store'
let store = rewire('../../../../../../src/app/v1/api/plans/store')
let helpers = rewire('../../../../../../src/app/v1/api/plans/helpers')

describe('app/v1/api/users', function () {
  describe('#internals', function () {
    describe('#applyFilters', function () {
      beforeEach(function() {
        helpers.__set__('PLANS', [
          {
            carrier: 'Aetna',
            name: 'CA Bronze Basic HMO Deductible 5500',
            specialty_drugs: '30%',
          },
          {
            carrier: 'Aetna',
            name: 'CA Bronze Basic HMO Deductible 9999',
            specialty_drugs: '50%',
          }
        ])
        helpers.__set__('PRICES', [
          {
            carrier: 'Aetna',
            plan: 'CA Bronze Basic HMO Deductible 5500',
            region: '17',
            age: '20',
            monthly_premium: '273.88'
          },
          {
            carrier: 'Aetna',
            plan: 'CA Bronze HMO Deductible 2000',
            region: '17',
            age: '21',
            monthly_premium: '431.3'
          }
        ])
        helpers.__set__('REGIONS', [
          {
            zip_code: '95221',
            region: '1'
          },
          {
            zip_code: '94107',
            region: '17'
          }
        ])
      })
      it('generates the update payload', function () {
        const query = {
          age: '20',
          zip_code: '94107'
        }
        const result = helpers.applyFilters(query)
        const target = [
          {
            "carrier": "Aetna",
            "monthly_premium": "273.88",
            "name": "CA Bronze Basic HMO Deductible 5500",
            "plan": {
              "carrier": "Aetna",
              "name": "CA Bronze Basic HMO Deductible 5500",
              "specialty_drugs": "30%"
            }
          }
        ]

        assert.deepEqual(result, target)
      })
    })
  })
})
